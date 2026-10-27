import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { localizePath } from "@/i18n/locale";
import { useLocale } from "@/i18n/useLocale";

type Props = Omit<ComponentProps<typeof Link>, "to" | "params"> & {
  /** Danish base path, e.g. "/kommuner" or "/viden/$slug". */
  to: string;
  params?: Record<string, string>;
};

/** Link that keeps the visitor on the active language version. */
export function LLink({ to, params, ...rest }: Props) {
  const locale = useLocale();
  let path = to;
  if (params) for (const [k, v] of Object.entries(params)) path = path.replace(`$${k}`, encodeURIComponent(v));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Link {...(rest as any)} to={localizePath(path, locale) as any} />;
}
