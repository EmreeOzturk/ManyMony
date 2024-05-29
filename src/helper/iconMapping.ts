import {
  Banana,
  Home,
  Car,
  User,
  Gift,
  Film,
  Music,
  Dumbbell,
  Ticket,
  Shirt,
  FileText,
  BriefcaseMedical,
  Smile,
  MoreHorizontal,
} from "lucide-react";
export type Category =
  | "KITCHEN"
  | "FOOD"
  | "ENTERTAINMENT"
  | "TRANSPORTATION"
  | "MEDICAL"
  | "PERSONAL"
  | "MISCALLENEOUS"
  | "GIFT"
  | "CINEMA"
  | "HOBBY"
  | "GYM"
  | "CONCERT"
  | "CLOTHES"
  | "BILLINGS"
  | "CAR";
const iconMapping: Record<Category, React.ComponentType> = {
  KITCHEN: Home,
  FOOD: Banana,
  ENTERTAINMENT: Music,
  TRANSPORTATION: Car,
  MEDICAL: BriefcaseMedical,
  PERSONAL: User,
  MISCALLENEOUS: MoreHorizontal,
  GIFT: Gift,
  CINEMA: Film,
  HOBBY: Smile,
  GYM: Dumbbell,
  CONCERT: Ticket,
  CLOTHES: Shirt,
  BILLINGS: FileText,
  CAR: Car,
};
export default iconMapping;
