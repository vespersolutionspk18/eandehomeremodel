"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, ChefHat, Bath, Home, TreePine, Building2, PlusSquare, Sofa, ShowerHead, Warehouse, Sun, UtensilsCrossed, Fence, Hammer, MapPin, Users, Award, Eye, Info } from "lucide-react";
import { useMegaMenu } from "../contexts/MegaMenuContext";

const MegaMenuCard = ({
  href,
  icon: Icon,
  title,
  description,
  isNew,
  hoverColor = '#0891b2',
  onNavigate
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
  isNew?: boolean;
  hoverColor?: string;
  onNavigate?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Close the dropdown menu
    if (onNavigate) {
      onNavigate();
    }

    // Check if the href contains a hash
    if (href.includes('#')) {
      const [path, hash] = href.split('#');

      // If we're navigating to a different page with a hash
      if (path && pathname !== path) {
        e.preventDefault();
        router.push(path);
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-100 transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6" style={{ color: hoverColor }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h4 className="text-base font-semibold text-gray-900" style={{ fontFamily: 'var(--font-figtree)' }}>
            {title}
          </h4>
          {isNew && (
            <span className="px-2 py-0.5 text-xs font-medium text-white rounded-full" style={{ backgroundColor: hoverColor }}>
              New
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-figtree)' }}>
          {description}
        </p>
      </div>
      <ArrowRight
        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-all duration-200 ${
          isHovered ? 'translate-x-1' : ''
        }`}
        style={isHovered ? { color: hoverColor } : {}}
      />
    </Link>
  );
};

interface MenuItem {
  title: string;
}

interface MegaMenuProps {
  hoverColor?: string;
}

const MegaMenu = ({ hoverColor = '#0891b2' }: MegaMenuProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { setIsOverlayActive } = useMegaMenu();

  // Services organized by category
  const serviceCategories = {
    kitchen: {
      title: "Kitchen",
      items: [
        { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling", icon: ChefHat, description: "Complete kitchen transformations" },
        { name: "Custom Cabinets", href: "/services/kitchen-remodeling/custom-cabinets", icon: Warehouse, description: "Built to your specifications" },
        { name: "Countertops", href: "/services/kitchen-remodeling/countertops", icon: Sofa, description: "Granite, quartz & more" },
        { name: "Kitchen Islands", href: "/services/kitchen-remodeling/kitchen-islands", icon: UtensilsCrossed, description: "Functional centerpieces" },
      ]
    },
    bathroom: {
      title: "Bathroom",
      items: [
        { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling", icon: Bath, description: "Full bathroom renovations" },
        { name: "Master Bathroom", href: "/services/bathroom-remodeling/master-bathroom", icon: Bath, description: "Luxury master retreats" },
        { name: "Shower Remodel", href: "/services/bathroom-remodeling/shower-remodel", icon: ShowerHead, description: "Walk-in & custom showers" },
        { name: "Tub-to-Shower", href: "/services/bathroom-remodeling/tub-to-shower-conversion", icon: ShowerHead, description: "Modern conversions" },
      ]
    },
    outdoor: {
      title: "Outdoor",
      items: [
        { name: "Outdoor Living", href: "/services/outdoor-living", icon: TreePine, description: "Extend your living space" },
        { name: "Patio Covers", href: "/services/outdoor-living/patio-covers", icon: Sun, description: "Shade & protection" },
        { name: "Outdoor Kitchens", href: "/services/outdoor-living/outdoor-kitchens", icon: UtensilsCrossed, description: "Cook under the stars" },
        { name: "Pergolas & Decks", href: "/services/outdoor-living/pergolas", icon: Fence, description: "Beautiful outdoor structures" },
      ]
    },
    additions: {
      title: "Additions",
      items: [
        { name: "Room Additions", href: "/services/room-additions", icon: PlusSquare, description: "Expand your living space" },
        { name: "ADU & Garage", href: "/services/adu-garage-conversion", icon: Building2, description: "Accessory dwelling units" },
        { name: "Whole House", href: "/services/whole-house-remodeling", icon: Home, description: "Complete renovations" },
        { name: "FREE 3D Design", href: "/contact", icon: Eye, description: "Visualize before building", isNew: true },
      ]
    }
  };

  // Locations organized by county
  const locationCategories = {
    ventura: {
      title: "Ventura County",
      items: [
        { name: "Ventura", href: "/locations/ventura" },
        { name: "Oxnard", href: "/locations/oxnard" },
        { name: "Camarillo", href: "/locations/camarillo" },
        { name: "Thousand Oaks", href: "/locations/thousand-oaks" },
        { name: "Moorpark", href: "/locations/moorpark" },
        { name: "Simi Valley", href: "/locations/simi-valley" },
      ]
    },
    santaBarbara: {
      title: "Santa Barbara County",
      items: [
        { name: "Santa Barbara", href: "/locations/santa-barbara" },
        { name: "Goleta", href: "/locations/goleta" },
        { name: "Carpinteria", href: "/locations/carpinteria" },
      ]
    },
    losAngeles: {
      title: "Los Angeles County",
      items: [
        { name: "San Fernando Valley", href: "/locations/san-fernando-valley" },
        { name: "Calabasas", href: "/locations/calabasas" },
        { name: "Woodland Hills", href: "/locations/woodland-hills" },
        { name: "Tarzana", href: "/locations/tarzana" },
        { name: "Encino", href: "/locations/encino" },
        { name: "Sherman Oaks", href: "/locations/sherman-oaks" },
        { name: "Burbank", href: "/locations/burbank" },
      ]
    }
  };

  const aboutItems = [
    { name: "Our Story", href: "/about/our-story", icon: Info, description: "25+ years of family craftsmanship" },
    { name: "Meet Ezra & Ester", href: "/about/meet-ezra-and-ester", icon: Users, description: "The owners behind every project" },
    { name: "Our Process", href: "/about/our-process", icon: Hammer, description: "From design to completion" },
  ];

  const menuItems: Record<string, MenuItem> = {
    "Services": {
      title: "Our Services"
    },
    "Locations": {
      title: "Service Areas"
    },
    "About": {
      title: "About E&E"
    }
  };

  const simpleLinks = [
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
  ];


  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Small delay to allow moving between button and dropdown
  };

  useEffect(() => {
    // Update overlay state when dropdown changes
    const shouldShowOverlay = activeDropdown === "Services";
    setIsOverlayActive(shouldShowOverlay);
  }, [activeDropdown, setIsOverlayActive]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="hidden md:flex items-center space-x-2 whitespace-nowrap">
      <Link
        href="/"
        className="px-5 py-2 text-lg text-black transition-all duration-200 rounded-full hover:bg-white/50 whitespace-nowrap"
        style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
        onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
        onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
      >
        Home
      </Link>
      {Object.entries(menuItems).map(([key, value]) => (
        <div
          key={key}
          className="relative"
          onMouseEnter={() => handleMouseEnter(key)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="px-5 py-2 text-lg text-black transition-all duration-200 rounded-full hover:bg-white/50 flex items-center gap-1 whitespace-nowrap"
            style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
            onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
            onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
          >
            {key}
            <ChevronDown className="w-4 h-4" />
          </button>

          <div
            className={`fixed top-20 left-1/2 transition-all duration-300 z-50 ${
              activeDropdown === key
                ? "opacity-100 visible pointer-events-auto"
                : "opacity-0 invisible pointer-events-none"
            }`}
            style={{ 
              transform: activeDropdown === key 
                ? 'translateX(-50%) translateY(0)' 
                : 'translateX(-50%) translateY(-12px)',
              WebkitTransform: activeDropdown === key 
                ? 'translateX(-50%) translateY(0)' 
                : 'translateX(-50%) translateY(-12px)'
            }}
            onMouseEnter={() => handleMouseEnter(key)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 transition-all duration-300 ease-in-out" style={{ width: 'auto', minWidth: '850px', maxWidth: '1000px' }}>
              <div ref={contentRef} className="w-full">
                {key === "Services" ? (
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 px-4" style={{ fontFamily: 'var(--font-figtree)' }}>
                      {value.title}
                    </h3>
                    <div className="grid grid-cols-4 gap-6">
                      {Object.values(serviceCategories).map((category, catIndex) => (
                        <div key={catIndex} className="flex flex-col">
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2" style={{ fontFamily: 'var(--font-figtree)' }}>
                            {category.title}
                          </h4>
                          <div className="flex flex-col gap-1">
                            {category.items.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100 transition-all"
                              >
                                <item.icon className="w-4 h-4 text-gray-400 group-hover:text-[#0891b2]" />
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900" style={{ fontFamily: 'var(--font-figtree)' }}>
                                    {item.name}
                                  </span>
                                  {'isNew' in item && item.isNew && (
                                    <span className="px-1.5 py-0.5 text-[10px] font-medium text-white rounded-full bg-[#0891b2]">
                                      Free
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 px-2">
                      <Link
                        href="/services"
                        onClick={() => setActiveDropdown(null)}
                        className="text-sm font-medium hover:underline flex items-center gap-1"
                        style={{ color: hoverColor, fontFamily: 'var(--font-figtree)' }}
                      >
                        View All Services <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ) : key === "Locations" ? (
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 px-4" style={{ fontFamily: 'var(--font-figtree)' }}>
                      {value.title}
                    </h3>
                    <div className="grid grid-cols-3 gap-8">
                      {Object.values(locationCategories).map((county, countyIndex) => (
                        <div key={countyIndex} className="flex flex-col">
                          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2 flex items-center gap-2" style={{ fontFamily: 'var(--font-figtree)' }}>
                            <MapPin className="w-4 h-4" />
                            {county.title}
                          </h4>
                          <div className="flex flex-col gap-1">
                            {county.items.map((city, index) => (
                              <Link
                                key={index}
                                href={city.href}
                                onClick={() => setActiveDropdown(null)}
                                className="px-2 py-1.5 text-sm font-medium text-gray-700 hover:text-[#0891b2] hover:bg-gray-100 rounded-lg transition-all"
                                style={{ fontFamily: 'var(--font-figtree)' }}
                              >
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 px-2">
                      <Link
                        href="/locations"
                        onClick={() => setActiveDropdown(null)}
                        className="text-sm font-medium hover:underline flex items-center gap-1"
                        style={{ color: hoverColor, fontFamily: 'var(--font-figtree)' }}
                      >
                        View All Locations <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ) : key === "About" ? (
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 px-4" style={{ fontFamily: 'var(--font-figtree)' }}>
                      {value.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {aboutItems.map((item, index) => (
                        <MegaMenuCard
                          key={index}
                          href={item.href}
                          icon={item.icon}
                          title={item.name}
                          description={item.description}
                          hoverColor={hoverColor}
                          onNavigate={() => setActiveDropdown(null)}
                        />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {simpleLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="px-5 py-2 text-lg text-black transition-all duration-200 rounded-full hover:bg-white/50 whitespace-nowrap"
          style={{ fontFamily: 'var(--font-figtree)', fontWeight: 500 }}
          onMouseEnter={(e) => e.currentTarget.style.color = hoverColor}
          onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default MegaMenu;