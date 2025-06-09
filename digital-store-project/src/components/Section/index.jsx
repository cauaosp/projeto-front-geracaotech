import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const Section = ({
  title,
  titleAlign = "left",
  link,
  image,
  children,
  ...props
}) => {
  return (
    <section className={cn("px-4 flex flex-col", props.className)}>
      {image}
      <div>
        <div
          className={`flex flex-col gap-4 justify-between text-4xl text-dark-gray-2 mb-4 font-semibold ${
            titleAlign === "center" && "items-center text-center gap-2"
          }`}
        >
          {title}
        </div>
        <div>{children}</div>
        {link && (
          <Button className="w-60 p-6 rounded-xl">
            <a
              href={link.href}
              className="text-lg text-white hover:underline"
            >
              {link.text}
            </a>
          </Button>
        )}
      </div>
    </section>
  );
};

export default Section;
