import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Section = ({
  title,
  titleAlign = "left",
  link,
  image,
  customTitle,
  customChildren,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        "px-4 flex flex-col md:flex-row items-center md:px-10 md:py-16",
        props.className
      )}
    >
      {image}
      <div className={`${image ? "md:w-1/2" : "w-full"}`}>
        <div
          className={cn(
            `flex flex-col gap-4 justify-between text-4xl text-dark-gray-2 mb-4 font-semibold ${
              titleAlign === "center" && "items-center text-center gap-2"
            }`,
            customTitle
          )}
        >
          {title}
        </div>
        <div className={customChildren}>{children}</div>
        {link && (
          <Button className="w-60 p-6 rounded-xl">
            <a href={link.href} className="text-lg text-white hover:underline">
              {link.text}
            </a>
          </Button>
        )}
      </div>
    </section>
  );
};

export default Section;
