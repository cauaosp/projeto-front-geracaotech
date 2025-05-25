import { useLocation } from 'react-router-dom'; // or usePathname from next/navigation if using Next.js
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils"; // Make sure you have this utility

const SiteNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/productlist", label: "ProductListInPage" },
    { href: "#", label: "Categorias" },
    { href: "#", label: "Meus Pedidos" },
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => (
          <div key={item.href} className="flex items-center">
            <BreadcrumbItem>
              <BreadcrumbLink
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-primary font-semibold",
                  currentPath === item.href
                    ? "text-primary underline underline-offset-4 decoration-2 font-bold"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && (
              <BreadcrumbSeparator className="px-3" children={""} />
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default SiteNavigation;