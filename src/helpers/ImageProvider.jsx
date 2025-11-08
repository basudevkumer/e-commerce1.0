import Logo from "@images/logo.png";
import NavMiddleLogo from "@images/navMiddleLogo.png";
import WidgetImageOne from "@images/widget1.png";
import WidgetImageTwo from "@images/widget2.png";
import WidgetImageThree from "@images/widget3.png";
import DiscountImage1 from "@images/discountImages.png";

export const allImages = {
  logo: Logo,
  navMiddle: NavMiddleLogo,
  widget1: WidgetImageOne,
  widget2: [
    { id: 1, src: WidgetImageTwo },
    { id: 2, src: WidgetImageThree },
  ],
  discountImages: [{ id: 1, src: DiscountImage1 }],
};
