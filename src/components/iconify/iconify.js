"use client";

import { forwardRef } from "react";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 20, ...other }, ref) => (
  <Icon icon={icon} {...other} ref={ref} />
));

Iconify.displayName = "Iconify";

export default Iconify;
