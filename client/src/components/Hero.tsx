import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Educational_consultation_hero_image_439e708b.png";
import { fadeInUpVariants, scaleInVariants, normalTransition, slowTransition } from "@/lib/motion";

interface HeroProps {
  headline: string;
  subtext: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
  showImage?: boolean;
}

export default function Hero({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
  onPrimaryCTA,
  onSecondaryCTA,
  showImage = true,
}: HeroProps) {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={normalTransition}
            className="space-y-8"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full"
            >
              <span className="text-primary font-semibold">Welcome to Dazzling Academy</span>
            </motion.div>
            
            <motion.h1
              variants={fadeInUpVariants}
              transition={{ ...normalTransition, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-[1.1] tracking-tight"
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={fadeInUpVariants}
              transition={{ ...normalTransition, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl"
            >
              {subtext}
            </motion.p>

            <motion.div
              variants={fadeInUpVariants}
              transition={{ ...normalTransition, delay: 0.3 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {primaryCTA && (
                <Button
                  size="lg"
                  onClick={onPrimaryCTA}
                  className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 h-12 shadow-lg hover:shadow-xl transition-all"
                  data-testid="button-primary-cta"
                >
                  {primaryCTA}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onSecondaryCTA}
                  className="text-base px-8 h-12 border-2 hover:bg-accent/5"
                  data-testid="button-secondary-cta"
                >
                  {secondaryCTA}
                </Button>
              )}
            </motion.div>

            <motion.div
              variants={fadeInUpVariants}
              transition={{ ...normalTransition, delay: 0.4 }}
              className="mt-12 flex items-center gap-8 text-sm text-muted-foreground/80"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                5+ Years Experience
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                95% Success Rate
              </div>
            </motion.div>
          </motion.div>

          {showImage && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleInVariants}
              transition={{ ...slowTransition, delay: 0.2 }}
              className="relative lg:ml-6"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Dazzling Academy education consultancy and career guidance session with students in Siliguri, North Bengal"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  decoding="async"
                  width="800"
                  height="600"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
