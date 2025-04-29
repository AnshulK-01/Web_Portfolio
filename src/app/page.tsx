"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === DATA.highlights.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? DATA.highlights.length - 1 : prev - 1
    );
  };

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <div className="starry-bg">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
                animateByCharacter={false}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-36 border-2">
                <AvatarImage 
                  alt={DATA.name} 
                  src={DATA.avatarUrl} 
                  className="object-cover w-full h-full"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills" className="p-4 w-full max-w-2xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
        </BlurFade>
        <div className="flex flex-col gap-4">
          {Object.entries(DATA.skills).map(([category, skills], categoryIndex) => (
            <div key={category}>
              <BlurFade delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.05}>
                <h3 className="text-lg font-semibold mb-2">{category}</h3>
              </BlurFade>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, skillIndex) => (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + categoryIndex * 0.05 + skillIndex * 0.02}>
                    <span className="bg-foreground text-background px-3 py-1 rounded-md text-sm font-medium shadow-sm transition-all hover:scale-105 cursor-default">
                      {skill}
                    </span>
                  </BlurFade>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="highlights" className="w-full py-12">
        <div className="space-y-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Highlights
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Key Contributions
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my notable achievements and contributions in the tech community.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="relative max-w-[400px] mx-auto">
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {DATA.highlights.map((highlight) => (
                  <div key={highlight.id} className="w-full flex-shrink-0">
                    <a
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-muted border border-border/80 rounded-lg p-4 hover:shadow-lg transition-all duration-300 h-[180px] flex flex-col hover:bg-muted/80"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-base text-foreground tracking-tight">{highlight.title}</h3>
                        <span className="text-xs text-muted-foreground/80 font-medium">{highlight.date}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3 flex-grow line-clamp-3">{highlight.description}</p>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 mt-auto pt-2 border-t border-border/50">
                        <span className="text-xs font-medium">View on LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {DATA.highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-foreground scale-125' : 'bg-foreground/30'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              View More Highlights →
            </button>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                While pursuing my studies in university, I&apos;ve been actively participating in hackathons where students come together to build incredible things in just 2–3 days. These experiences have been eye-opening, showing how much can be achieved when passionate minds collaborate.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
