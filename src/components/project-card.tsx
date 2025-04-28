import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full bg-card",
        className
      )}
    >
      <Link
        href={href || "#"}
        className="block cursor-pointer h-40 relative overflow-hidden bg-muted w-full"
      >
        {video && !video.includes("youtu") && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {image && !video && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover object-center"
          />
        )}
        {(!image || (video && video.includes("youtu"))) && (
          <div className="absolute inset-0 flex items-center justify-center bg-white overflow-hidden border border-gray-200 dark:border-transparent">
            {/* Title */}
            <span className="text-2xl font-bold text-black relative z-10">
              {title}
            </span>
          </div>
        )}
      </Link>
      <div className="flex flex-col flex-grow">
        <CardHeader className="p-4">
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <time className="text-sm text-muted-foreground">{dates}</time>
            <div className="hidden font-sans text-xs underline print:visible">
              {link?.replace("https://", "").replace("www.", "").replace("/", "")}
            </div>
            <Markdown className="prose prose-sm max-w-full text-pretty text-muted-foreground dark:prose-invert">
              {description}
            </Markdown>
          </div>
        </CardHeader>
        <CardContent className="mt-auto p-4 pt-0">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags?.map((tag) => (
                <Badge
                  variant="secondary"
                  className="px-2 py-0.5 text-xs"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="p-4 pt-0">
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {links?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge className="flex items-center gap-2 px-3 py-1">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
