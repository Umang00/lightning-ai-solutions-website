import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center px-4">
          <div className="mb-6">
            <span className="text-6xl">⚡</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent mb-6">
            Lightning AI Solutions
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
            Lightning-Fast AI Solutions That Scale
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button size="lg">Primary Button</Button>
            <Button variant="secondary" size="lg">Secondary</Button>
            <Button variant="outline" size="lg">Outline</Button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Badge>Cyan</Badge>
            <Badge variant="secondary">Purple</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>
      </div>
    </main>
  );
}
