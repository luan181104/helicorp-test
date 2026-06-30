import Link from "next/link";
import {
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";
import { footerLinks, socialLinks } from "@/constants/footer";
import { Icon } from "lucide-react";

const socialIcons: Record<string, React.ElementType> = {
  X: TwitterIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  YouTube: YoutubeIcon,
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-neutral-950 px-6 pt-20 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 pb-16 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <span className="text-2xl font-bold text-white">SOUNDWAVE</span>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Premium wireless audio engineered for those who demand more
              from their sound.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
  const Icon = socialIcons[social.label];
  return (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-400 transition-all duration-200 hover:bg-cyan-500 hover:text-white"
      >
      <Icon className="h-[18px] w-[18px]" />
    </a>
  );
})}
            </div>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Support" links={footerLinks.support} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Soundwave. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}