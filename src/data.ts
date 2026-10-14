import {
  AmenityItem,
  FloorPlanUnit,
  CommuteDestination,
  SpecificationCategory,
  ConsultantItem,
  TrackRecordProject,
  MasterPlanPoint,
} from "./types";

export const projectSnapshot = {
  name: "Abhyudaya Celestial",
  tagline: "Premium 3 BHK Apartments in Lucknow",
  developer: "Abhyudaya",
  developerFull: "ABHYUDAYA H & C P LTD",
  developerBio:
    "Abhyudaya Celestial brings thoughtfully planned 3 BHK residences to Shalimar One World, Shaheed Path, offering a balance of spacious living, contemporary design, and a well-connected location.",
  projectAddress: "GH-18, Shalimar One World Township, Shaheed Path, Lucknow, Uttar Pradesh.",
  officeAddress: "1/6 Gokhle Marg, Lucknow, Uttar Pradesh.",
  address: "GH-18, Shalimar One World Township, Shaheed Path, Lucknow, Uttar Pradesh.",
  locationName: "Shaheed Path, Lucknow",
  reraNumber: "UPRERAPRJ414462/06/2025",
  reraWebsite: "www.up-rera.in",
  reraWebsiteUrl: "https://www.up-rera.in",
  launchDate: "17th June 2025",
  bankDetails: {
    accountName: "ABHYUDAYA H & C P LTD",
    collectionAccountName: "ABHYUDAYA CELESTIAL",
    accountNumber: "43068921694",
    bankName: "State Bank of India",
    branch: "Lucknow",
    ifscCode: "SBIN0004166",
  },
  phonePrimary: "+91 98765 43210",
  phoneSecondary: "+91 98765 43210",
  phoneRaw: "9876543210",
  email: "info@abhyudayacelestial.com",
  website: "www.abhyudayacelestial.com",
  storeyCount: "30-Storey Residential Tower",
  totalFloors: "30 Floors",
  flatsCount: "Premium Residences",
  openSpace: "Landscaped Green Areas",
  ceilingHeight: "Spacious Layouts",
  clubhouseArea: "Lifestyle Amenities",
  amenitiesCount: "Premium Amenities",
  parking: "Dedicated Parking",
  unitGap: "Contemporary High-Rise",
  configuration: "3 BHK & 3 BHK + Servant Residences",
  sizes: "3 BHK (1,107 sq. ft.) & 3 BHK + Servant (1,428 sq. ft.)",
  lifts: "High-Speed Lifts",
};

export const keyHighlights = [
  { value: "30", label: "Storey Tower", sub: "Residential High-Rise" },
  { value: "3 BHK", label: "Premium Homes", sub: "Spacious Layouts" },
  { value: "₹1.66 Cr*", label: "Starting Price", sub: "Premium 3 BHK Residences" },
  { value: "1,107+", label: "Sq.Ft Carpet", sub: "Designed for Everyday Comfort" },
  { value: "Premium", label: "Lifestyle", sub: "Fitness & Wellness Spaces" },
  { value: "Connected", label: "Address", sub: "Shalimar OneWorld" },
  { value: "Strategic", label: "Location", sub: "Access to Shaheed Path" },
  { value: "Secure", label: "Living", sub: "Security & Convenience" },
];

export const amenitiesData: AmenityItem[] = [
  {
    id: "fitness-wellness",
    title: "Fitness & Wellness Spaces",
    category: "HEALTH & SPORTS",
    tagline: "Designed for Movement and Energy",
    description:
      "Dedicated spaces for fitness, relaxation, recreation, and spending time with family.",
    imageUrl: "/assets/silver_horizon/indoor_gym.webp",
    images: [
      "/assets/silver_horizon/indoor_gym.webp",
    ],
    bullets: [
      "Swimming Pool",
      "Fitness Center",
      "Wellness Spaces",
    ],
  },
  {
    id: "leisure-recreation",
    title: "Leisure & Recreation Oasis",
    category: "SERENITY & RECREATION",
    tagline: "Relax, Unwind and Rejuvenate",
    description:
      "From fitness and recreation to peaceful moments with family, Abhyudaya Celestial brings everyday experiences closer to home.",
    imageUrl: "/assets/silver_horizon/indoor_pool.webp",
    images: [
      "/assets/silver_horizon/indoor_pool.webp",
      "/assets/silver_horizon/wellness_pool.webp",
    ],
    bullets: [
      "Landscaped Green Areas",
      "Indoor Recreation",
      "Peaceful Retreats",
    ],
  },
  {
    id: "community-events",
    title: "Community & Social Hub",
    category: "COMMUNITY LIVING",
    tagline: "Where Neighbors Become Family",
    description:
      "A thoughtfully planned residential environment where comfort extends beyond your apartment.",
    imageUrl: "/assets/silver_horizon/kids_play_area.webp",
    images: [
      "/assets/silver_horizon/kids_play_area.webp",
      "/assets/silver_horizon/pavilion_amphitheatre.webp",
    ],
    bullets: [
      "Children's Play Area",
      "Community Gathering Spaces",
    ],
  },
  {
    id: "safety-infrastructure",
    title: "Safety & Eco Infrastructure",
    category: "SUSTAINABILITY & SAFETY",
    tagline: "Reliable, Sustainable and Secure",
    description:
      "Modern infrastructure and round-the-clock safety systems provide total peace of mind for every family.",
    imageUrl: "/assets/silver_horizon/ev_charging.webp",
    images: [
      "/assets/silver_horizon/ev_charging.webp",
    ],
    bullets: [
      "Security & Convenience Features",
      "24/7 Surveillance",
    ],
  },
];

export const floorPlansData: FloorPlanUnit[] = [
  {
    id: "unit-01",
    title: "3 BHK Residence",
    type: "3 BHK",
    sbua: "TBD",
    carpetArea: "Approx. 1,107 sq. ft.",
    imageUrl: "/assets/silver_horizon/unit_plan_01.webp",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    highlights: [
      "Approx. 1,107 sq. ft. RERA Carpet Area",
      "Starting ₹1.66 Cr*",
      "Thoughtfully planned homes with layouts designed around everyday comfort",
      "Functional and spacious living spaces",
    ],
  },
  {
    id: "unit-02",
    title: "3 BHK + Servant Residence",
    type: "3 BHK + Servant",
    sbua: "TBD",
    carpetArea: "Approx. 1,428 sq. ft.",
    imageUrl: "/assets/silver_horizon/unit_plan_02.webp",
    bedrooms: 3,
    bathrooms: 4,
    balconies: 3,
    highlights: [
      "Approx. 1,428 sq. ft. RERA Carpet Area",
      "Price on Request",
      "Expansive layout for premium living",
      "Includes dedicated servant room",
    ],
  },
];

export const masterPlanLegends: MasterPlanPoint[] = [
  { id: 1, name: "Swimming Pool", category: "Sports & Wellness" },
  { id: 2, name: "Fitness & Wellness Spaces", category: "Sports & Wellness" },
  { id: 3, name: "Landscaped Green Areas", category: "Nature & Landscape" },
  { id: 4, name: "Children's Play Area", category: "Family & Kids" },
  { id: 5, name: "Indoor Recreation", category: "Sports & Wellness" },
  { id: 6, name: "Community Gathering Spaces", category: "Family & Kids" },
  { id: 7, name: "Security Gate", category: "Entrance & Arrival" },
];

export const locationsData: CommuteDestination[] = [
  {
    id: "ekana-stadium",
    name: "Ekana International Cricket Stadium",
    distance: "Nearby",
    icon: "sports_cricket",
    category: "Leisure",
    times: { driving: 5, transit: 10, walking: 20 },
  },
  {
    id: "phoenix-mall",
    name: "Phoenix Palassio Mall",
    distance: "Nearby",
    icon: "shopping_bag",
    category: "Leisure",
    times: { driving: 10, transit: 15, walking: 30 },
  },
  {
    id: "lulu-mall",
    name: "Lulu Mall",
    distance: "Nearby",
    icon: "local_mall",
    category: "Leisure",
    times: { driving: 15, transit: 20, walking: 45 },
  },
  {
    id: "medanta-hospital",
    name: "Medanta Hospital",
    distance: "Nearby",
    icon: "local_hospital",
    category: "Hospital",
    times: { driving: 15, transit: 20, walking: 40 },
  },
  {
    id: "shaheed-path",
    name: "Shaheed Path",
    distance: "Adjacent",
    icon: "add_road",
    category: "Transit",
    times: { driving: 2, transit: 5, walking: 10 },
  },
  {
    id: "airport",
    name: "Chaudhary Charan Singh International Airport",
    distance: "Lucknow Airport",
    icon: "flight",
    category: "Transit",
    times: { driving: 25, transit: 40, walking: 120 },
  },
];

export const nearbyPointsOfInterest = {
  businessHubs: [],
  schools: [],
  hospitals: [
    { name: "Medanta Hospital", dist: "Nearby" },
  ],
  leisure: [
    { name: "Ekana International Cricket Stadium", dist: "Nearby" },
    { name: "Phoenix Palassio Mall", dist: "Nearby" },
    { name: "Lulu Mall", dist: "Nearby" },
  ],
  infrastructure: [
    {
      title: "Shaheed Path Connectivity",
      desc: "Convenient access to Shaheed Path and important destinations across Lucknow.",
      badge: "Prime Location",
      img: "/assets/silver_horizon/prr_expressway.webp",
    },
    {
      title: "Chaudhary Charan Singh International Airport",
      desc: "Easy connectivity to the airport for frequent travelers.",
      badge: "Transit Hub",
      img: "/assets/silver_horizon/metro_train.webp",
    },
  ],
};

export const specificationsData: SpecificationCategory[] = [];
export const approvalsData: any[] = [];
export const consultantsData: ConsultantItem[] = [];
export const trackRecordData: TrackRecordProject[] = [];
