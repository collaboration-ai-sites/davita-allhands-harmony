
import { cn } from "@/lib/utils";

const BrandToolkit = () => {
  const colors = [
    { name: "DaVita Blue", hex: "#0056a2", class: "bg-davita-blue" },
    { name: "DaVita Green", hex: "#00a651", class: "bg-davita-green" },
    { name: "DaVita Light", hex: "#f5f9fd", class: "bg-davita-light text-gray-800" },
    { name: "DaVita Dark", hex: "#1a2a3a", class: "bg-davita-dark" },
    { name: "Cyan", hex: "#0891b2", class: "bg-cyan-500" },
    { name: "Purple", hex: "#9333ea", class: "bg-purple-600" },
    { name: "Orange", hex: "#f97316", class: "bg-orange-500" },
  ];

  const gradients = [
    { 
      name: "Cyan to Purple", 
      class: "bg-gradient-to-r from-cyan-500 to-purple-600" 
    },
    { 
      name: "Purple to Orange", 
      class: "bg-gradient-to-r from-purple-600 to-orange-400" 
    },
    { 
      name: "Cyan to Blue", 
      class: "bg-gradient-to-r from-cyan-400 to-blue-500" 
    },
  ];

  const fontSizes = [
    { name: "Text XS", class: "text-xs", example: "Extra Small Text" },
    { name: "Text SM", class: "text-sm", example: "Small Text" },
    { name: "Text Base", class: "text-base", example: "Base Text" },
    { name: "Text LG", class: "text-lg", example: "Large Text" },
    { name: "Text XL", class: "text-xl", example: "Extra Large Text" },
    { name: "Text 2XL", class: "text-2xl", example: "2XL Text" },
    { name: "Text 3XL", class: "text-3xl", example: "3XL Text" },
    { name: "Text 4XL", class: "text-4xl", example: "4XL Text" },
    { name: "Text 5XL", class: "text-5xl", example: "5XL Text" },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-12">
        DaVita Brand Toolkit
      </h1>

      {/* Logo Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Logos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-subtle flex flex-col items-center justify-center">
            <img 
              src="/lovable-uploads/86c8b395-8724-422e-b6aa-a0c2f953cad7.png" 
              alt="DaVita Logo" 
              className="h-12 w-auto object-contain mb-4" 
            />
            <p className="text-sm text-gray-500">Primary Logo</p>
          </div>
          
          <div className="p-6 bg-davita-blue rounded-lg shadow-subtle flex flex-col items-center justify-center">
            <img 
              src="/lovable-uploads/9a1f39f8-065c-466c-91da-af96144f567a.png" 
              alt="DaVita Logo White" 
              className="h-12 w-auto object-contain mb-4" 
            />
            <p className="text-sm text-white">Reversed Logo</p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-subtle flex flex-col items-center justify-center">
            <img 
              src="/lovable-uploads/e03f5efe-4964-4cc8-a4a5-7c9ce276769f.png" 
              alt="ConvergeAI Summit Logo" 
              className="h-16 w-auto object-contain mb-4" 
            />
            <p className="text-sm text-gray-500">Summit Logo</p>
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-600 to-orange-400 rounded-lg shadow-subtle flex flex-col items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 mb-4">
              <img 
                src="/lovable-uploads/e03f5efe-4964-4cc8-a4a5-7c9ce276769f.png" 
                alt="ConvergeAI Summit Logo" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <p className="text-sm text-white">Logo on Gradient</p>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="flex flex-col">
              <div 
                className={cn(
                  "h-24 rounded-t-lg flex items-end p-3",
                  color.class
                )}
              >
                <span className="text-white text-xs font-medium">{color.hex}</span>
              </div>
              <div className="p-3 bg-white rounded-b-lg border border-t-0 border-gray-200">
                <p className="text-sm font-medium">{color.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gradients Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Gradients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gradients.map((gradient) => (
            <div key={gradient.name} className="flex flex-col">
              <div 
                className={cn(
                  "h-24 rounded-t-lg",
                  gradient.class
                )}
              ></div>
              <div className="p-3 bg-white rounded-b-lg border border-t-0 border-gray-200">
                <p className="text-sm font-medium">{gradient.name}</p>
                <p className="text-xs text-gray-500">className="{gradient.class}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Typography</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Font Families</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Primary Font - Inter</p>
              <p className="text-2xl">Inter Regular</p>
              <p className="text-2xl italic">Inter Italic</p>
              <p className="text-2xl font-bold">Inter Bold</p>
            </div>
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Display Font - SF Pro Display</p>
              <p className="text-2xl font-display">SF Pro Display Regular</p>
              <p className="text-2xl font-display italic">SF Pro Display Italic</p>
              <p className="text-2xl font-display font-bold">SF Pro Display Bold</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Font Sizes</h3>
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200 bg-gray-50">
              <div className="text-sm font-medium text-gray-600">Name</div>
              <div className="text-sm font-medium text-gray-600">Class</div>
              <div className="text-sm font-medium text-gray-600">Example</div>
            </div>
            {fontSizes.map((size) => (
              <div key={size.name} className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200">
                <div className="text-sm">{size.name}</div>
                <div className="text-sm text-gray-500">{size.class}</div>
                <div className={cn(size.class, "font-display")}>{size.example}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UI Elements Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">UI Elements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buttons */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Buttons</h3>
            <div className="space-y-4 p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500">Primary Button</p>
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Primary Action
                </button>
              </div>
              
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500">Secondary Button</p>
                <button className="inline-flex h-10 items-center justify-center rounded-md border border-cyan-500/20 bg-transparent px-4 py-2 text-sm font-medium text-cyan-700 transition-colors hover:bg-cyan-500/5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2">
                  Secondary Action
                </button>
              </div>
            </div>
          </div>
          
          {/* Cards */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Cards</h3>
            <div className="space-y-4 p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500">Standard Card</p>
                <div className="p-4 rounded-lg border border-gray-200 bg-white shadow-subtle">
                  <h4 className="font-medium mb-2">Card Title</h4>
                  <p className="text-sm text-gray-500">Card content and description go here.</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500">Glass Card</p>
                <div className="glass-panel p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Glass Card Title</h4>
                  <p className="text-sm text-gray-500">Semi-transparent card with backdrop blur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Animations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Slide Up (animate-slide-up)</p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-lg animate-slide-up"></div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Slide Down (animate-slide-down)</p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg animate-slide-down"></div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-4">Pulse (animate-pulse-slow)</p>
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandToolkit;
