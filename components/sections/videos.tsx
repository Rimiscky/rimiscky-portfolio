"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { videoClips, videoProjects } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";

function VideoCard({
  project,
}: {
  project: (typeof videoProjects)[number];
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const start = () => {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <Reveal>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl shadow-black/10"
      >
        <div className="relative aspect-video overflow-hidden bg-black">
          {playing ? (
            <video
              ref={videoRef}
              src={project.src}
              poster={project.poster}
              controls
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <button
              type="button"
              onClick={start}
              className="absolute inset-0 h-full w-full cursor-pointer"
              aria-label={`Lire la vidéo : ${project.title}`}
            >
              <Image
                src={project.poster}
                alt={`Aperçu — ${project.title}`}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/25 sm:h-20 sm:w-20">
                  <Play className="ml-1 h-6 w-6 fill-white text-white sm:h-7 sm:w-7" />
                </span>
              </span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 p-6 sm:p-8">
          <div>
            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{project.title}</h3>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function MiniClip({
  clip,
  index,
}: {
  clip: (typeof videoClips)[number];
  index: number;
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
    }
  };

  return (
    <Reveal delay={index * 0.12} className={clip.width > clip.height ? "self-center" : undefined}>
      <motion.figure
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group overflow-hidden rounded-3xl border border-line bg-surface shadow-xl shadow-black/10"
      >
        <button
          type="button"
          onClick={toggle}
          className="relative block w-full cursor-pointer"
          style={{ aspectRatio: `${clip.width} / ${clip.height}` }}
          aria-label={`${playing ? "Mettre en pause" : "Lire"} le clip : ${clip.title}`}
        >
          <video
            ref={videoRef}
            src={clip.src}
            poster={clip.poster}
            muted
            loop
            playsInline
            preload="none"
            onEnded={() => setPlaying(false)}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/25">
              {playing ? (
                <Pause className="h-5 w-5 fill-white text-white" />
              ) : (
                <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
              )}
            </span>
          </span>
        </button>
        <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
          <span className="text-sm font-semibold tracking-tight">{clip.title}</span>
          <span className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
            {clip.tag}
          </span>
        </figcaption>
      </motion.figure>
    </Reveal>
  );
}

export function Videos() {
  return (
    <section id="video" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          kicker="Vidéo"
          title="Des images en mouvement"
          description="Films de marque, contenus réseaux sociaux et captations — pensés pour capter l'attention dès la première seconde."
        />
        <div className="space-y-10">
          {videoProjects.map((project) => (
            <VideoCard key={project.src} project={project} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {videoClips.map((clip, i) => (
            <MiniClip key={clip.src} clip={clip} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
