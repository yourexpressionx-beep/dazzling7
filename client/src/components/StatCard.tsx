import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { scaleInVariants, viewportSettings, normalTransition } from "@/lib/motion";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index?: number;
}

export default function StatCard({ icon: Icon, value, label, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={scaleInVariants}
      viewport={viewportSettings}
      transition={{ ...normalTransition, delay: index * 0.1 }}
      className="group relative p-6 text-center rounded-2xl bg-background/50 backdrop-blur-sm border border-accent/10 hover:border-accent/20 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-8 w-8 text-accent" />
          </div>
        </div>
        <div className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">{value}</div>
        <div className="text-base text-muted-foreground/80 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}
