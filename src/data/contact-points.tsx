import {
  type IconProps,
  MobileIcon,
  PhoneIcon,
  EmailIcon,
} from "../components/ContactPoint";

export interface ContactPoint {
  type: "Mob" | "Tel" | "Email";
  details: string;
  icon?: React.FC<IconProps>;
}

export const contactPoints: ContactPoint[] = [
  {
    type: "Mob",
    details: "07581 398859",
    icon: MobileIcon,
  },
  {
    type: "Tel",
    details: "01323 899839",
    icon: PhoneIcon,
  },
  {
    type: "Email",
    details: "mail@jaiscudderplumbing.co.uk",
    icon: EmailIcon,
  },
];
