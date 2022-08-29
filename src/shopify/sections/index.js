import { register, load } from "@shopify/theme-sections";
import Header from "@/shopify/sections/header";
import FeaturedCollection from "@/shopify/sections/featured-collection";
require("@/shopify/sections/product-card");

register("header", Header);
register("featured-collection", FeaturedCollection);
load("*");
