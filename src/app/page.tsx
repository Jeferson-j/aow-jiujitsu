"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  AtSign,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

import { academy, gallery, polos, responsavel } from "@/data/academy";
import { getWazeUrl } from "@/lib/waze";
function Button({
  children,
  href,
  variant = "red",
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "red" | "dark" | "line";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}) {
  const className = `btn btn-${variant}`;

  return href ? (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  ) : (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

const carouselImages = polos
  .flatMap((polo) => polo.images.map((image) => ({ image, polo })))
  .slice(0, 8);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [polo, setPolo] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [formError, setFormError] = useState("");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [snapCount, setSnapCount] = useState(carouselImages.length);
  const whatsapp = `https://wa.me/${academy.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de conhecer a academia.")}`;
  const goToContact = () => {
    document.getElementById("contato")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setPolo(emblaApi.selectedScrollSnap());
    const onReInit = () => setSnapCount(emblaApi.scrollSnapList().length);
    emblaApi.scrollTo(0, true);
    onReInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi]);
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => window.clearInterval(autoplay);
  }, [emblaApi]);
  const selectPolo = (index: number) => {
    setPolo(index);
    emblaApi?.scrollTo(index);
  };
  const previousPolo = (polo - 1 + snapCount) % snapCount;
  const nextPolo = (polo + 1) % snapCount;
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        setLightbox(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <header className="header  ">
          <a href="#inicio" className="brand ">
            <Image
              src={`${basePath}/logo-aow.png`}
              alt="AOW Jiu-Jitsu"
              width={52}
              height={52}
              className="brand-logo"
            />
            <span>
              {academy.name}
              <small>JIU-JITSU BRASILEIRO</small>
            </span>
          </a>
          {menu && (
            <button
              className="menu-overlay"
              aria-label="Fechar menu"
              onClick={() => setMenu(false)}
            />
          )}
          <nav id="site-navigation" className={menu ? "nav open" : "nav"}>
            <a href="#inicio" onClick={() => setMenu(false)}>
              Início
            </a>
            <a href="#polos" onClick={() => setMenu(false)}>
              Polos
            </a>
            <a href="#sobre" onClick={() => setMenu(false)}>
              Sobre
            </a>
            <a href="#contato" onClick={() => setMenu(false)}>
              Contato
            </a>
            <Button href="#polos" variant="red">
              Conheça nossos polos
            </Button>
          </nav>
          <button
            className="menu-toggle"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            aria-controls="site-navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </header>

        <section id="inicio" className="hero">
          <Image
            src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=2000&q=90"
            alt="Atletas treinando Jiu-Jitsu"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-shade" />
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow light">DESDE 2012 · SÃO PAULO</p>
            <h1 className="display">
              O corpo aprende.
              <br />
              <em>A mente evolui.</em>
            </h1>
            <p className="hero-copy">
              Jiu-Jitsu para todos os corpos, todas as histórias e todos os
              próximos passos.
            </p>
            <div className="hero-actions">
              <Button href="#polos" variant="red">
                Encontrar um polo <ArrowRight size={17} />
              </Button>
              <Button href={whatsapp} variant="line">
                {" "}
                <MessageCircle size={17} /> Falar no WhatsApp
              </Button>
            </div>
          </motion.div>
          <a href="#polos" className="scroll-cue">
            <span>ROLE PARA EXPLORAR</span>
            <ArrowDown size={16} />
          </a>
          <div className="hero-stamp">
            DISCIPLINA
            <br />
            <span>·</span> RESPEITO
            <br />
            <span>·</span> EVOLUÇÃO
          </div>
        </section>

        <section id="polos" className="section locations">
          <div className="section-head">
            <div>
              <p className="eyebrow">ONDE TREINAR</p>
              <h2 className="display">
                Encontre seu <em>tatame.</em>
              </h2>
            </div>
            <div className="carousel-controls">
              <button
                aria-label="Imagem anterior"
                onClick={() => selectPolo(previousPolo)}
              >
                <ArrowLeft size={18} />
              </button>
              <span>
                <span aria-live="polite">0{polo + 1}</span>{" "}
                <i>/ 0{snapCount}</i>
              </span>
              <button
                aria-label="Próxima imagem"
                onClick={() => selectPolo(nextPolo)}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div
            className="polo-window"
            ref={emblaRef}
            tabIndex={0}
            role="region"
            aria-roledescription="carrossel"
            aria-label="Polos da academia"
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                selectPolo(previousPolo);
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                selectPolo(nextPolo);
              }
            }}
          >
            <div className="polo-track">
              {carouselImages.map((item, index) => (
                <div className="polo-slide" key={`${item.polo.name}-${index}`}>
                  <article
                    className="polo-card"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`Imagem ${index + 1} de ${carouselImages.length}`}
                  >
                    <div
                      className="polo-photo polo-clickable"
                      role="link"
                      tabIndex={0}
                      onClick={goToContact}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          goToContact();
                        }
                      }}
                    >
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 700px) 100vw, 45vw"
                      />

                      <span>
                        0{index + 1} / {item.polo.name.toUpperCase()}
                      </span>
                    </div>

                    <div
                      className="polo-info polo-clickable"
                      role="link"
                      tabIndex={0}
                      onClick={goToContact}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          goToContact();
                        }
                      }}
                    >
                      <p className="eyebrow">{item.polo.location}</p>

                      <h3 className="display">{item.polo.name}</h3>

                      <p>{item.polo.description}</p>

                      <dl>
                        <div>
                          <dt>ENDEREÇO</dt>
                          <dd>
                            <MapPin size={14} />
                            {item.polo.address}
                          </dd>
                        </div>

                        <div>
                          <dt>HORÁRIOS</dt>
                          <dd>{item.polo.schedule}</dd>
                        </div>

                        <div>
                          <dt>RESPONSÁVEL</dt>
                          <dd>{item.polo.leader}</dd>
                        </div>
                      </dl>

                      <Button
                        href={getWazeUrl(item.polo.address)}
                        variant="dark"
                        onClick={(event) => event.stopPropagation()}
                      >
                        Abrir no Waze <ArrowRight size={16} />
                      </Button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <p className="carousel-hint">Deslize para conhecer os polos</p>
          <div className="dots">
            {Array.from({ length: snapCount }, (_, index) => (
              <button
                key={index}
                aria-label={`Ir para a imagem ${index + 1}`}
                className={index === polo ? "active" : ""}
                onClick={() => selectPolo(index)}
              />
            ))}
          </div>
        </section>

        <section className="manifesto texture">
          <p className="eyebrow">MAIS QUE UMA ACADEMIA</p>
          <h2 className="display">
            Treine com propósito.
            <br />
            <em>Evolua com a gente.</em>
          </h2>
          <div className="manifesto-rule" />
        </section>

        <section className="section gallery-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">VIDA NO TATAME</p>
              <h2 className="display">
                A técnica é <em>coletiva.</em>
              </h2>
            </div>
            <p className="section-note">
              Treinos, campeonatos e os momentos que fazem cada faixa valer a
              pena.
            </p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <button
                className={`gallery-item gallery-${index + 1}`}
                key={item.src}
                onClick={() => setLightbox(index)}
                aria-label={`Ampliar: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 50vw, 25vw"
                />
              </button>
            ))}
          </div>
        </section>

        <section id="sobre" className="section about">
          <div className="about-image">
            <Image
              src={responsavel.image.src}
              alt={responsavel.image.alt}
              fill
              sizes="(max-width: 700px) 100vw, 42vw"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow">QUEM GUIA A JORNADA</p>
            <h2 className="display">
              André
              <br />
              <em>Martins.</em>
            </h2>
            <p className="rank">
              {responsavel.rank} <span>/</span> {responsavel.experience}
            </p>
            <p className="bio">{responsavel.bio}</p>
            <div className="values">
              <span>
                01 <b>DISCIPLINA</b>
              </span>
              <span>
                02 <b>RESPEITO</b>
              </span>
              <span>
                03 <b>TÉCNICA</b>
              </span>
              <span>
                04 <b>EVOLUÇÃO</b>
              </span>
            </div>
          </div>
        </section>

        <section id="contato" className="contact">
          <div>
            <p className="eyebrow light">PRIMEIRO PASSO</p>
            <h2 className="display">
              Sua primeira aula
              <br />
              começa aqui.
            </h2>
            <p>Venha conhecer o tatame, a metodologia e a comunidade.</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              const form = event.currentTarget;

              if (!form.checkValidity()) {
                setFormError("Preencha seu nome e escolha um polo.");
                form.reportValidity();
                return;
              }

              const formData = new FormData(form);
              const name = String(formData.get("name") ?? "").trim();
              const polo = String(formData.get("polo") ?? "").trim();

              const message = `Olá, sou o ${name} e gostaria de saber mais sobre o ${polo}`;

              const whatsappUrl = `https://wa.me/${
                academy.whatsapp
              }?text=${encodeURIComponent(message)}`;

              window.location.assign(whatsappUrl);
            }}
            className="contact-form"
          >
            <label>
              SEU NOME
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Como podemos te chamar?"
              />
            </label>

            <label>
              POLO DE INTERESSE
              <select
                defaultValue=""
                required
                name="polo"
                aria-describedby="form-error"
              >
                <option value="" disabled>
                  Escolha um polo
                </option>

                {polos.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>

            <button className="form-submit" type="submit">
              Falar no WhatsApp <MessageCircle size={18} />
            </button>

            {formError && (
              <p id="form-error" className="form-error" role="alert">
                {formError}
              </p>
            )}
          </form>
        </section>

        <footer className="footer">
          <div className="brand">
            <Image
              src={`${basePath}/logo-aow.png`}
              alt="AOW Jiu-Jitsu"
              width={52}
              height={52}
              className="brand-logo"
            />
            <span>
              {academy.name}
              <small>JIU-JITSU BRASILEIRO</small>
            </span>
          </div>
          <div className="footer-links">
            <a href="#polos">Polos</a>
            <a href="#sobre">Sobre</a>
            <a href={academy.instagram} target="_blank" rel="noreferrer">
              <AtSign size={16} /> Instagram
            </a>
          </div>
          <div className="footer-contact">
            <a href={whatsapp}>
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
          <div className="copyright">
            © 2024 {academy.name}. Todos os direitos reservados.
          </div>
        </footer>
        {lightbox !== null && (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Imagem ampliada"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Fechar imagem"
              onClick={() => setLightbox(null)}
            >
              <X />
            </button>
            <Image
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              width={1200}
              height={900}
            />
          </div>
        )}
      </main>
    </div>
  );
}
