import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { fadeInUpVariants, viewportSettings, normalTransition } from "@/lib/motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon: Icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUpVariants}
      viewport={viewportSettings}
      transition={{ ...normalTransition, delay: index * 0.1 }}
    >
      <Card className="group relative p-6 h-full hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/20 overflow-hidden bg-card">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative space-y-4">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
            <Icon className="h-7 w-7 text-primary group-hover:text-primary/90" />
          </div>
          <h3 className="text-xl font-semibold text-secondary tracking-tight">{title}</h3>
          <p className="text-secondary/80 leading-relaxed">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
