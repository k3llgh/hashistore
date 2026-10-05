export type ProductGroup = 'school' | 'office' | 'sports';

export type Product = {
  name: string;
  description: string;
  /** Optional. Drop a file in public/images/products/ and set e.g. '/images/products/a4-exercise-book.jpeg'.
   *  Leave it out to show the placeholder. */
  image?: string;
};

export type Category = {
  id: string;
  name: string;
  /** Which filter tabs this category appears under. */
  groups: ProductGroup[];
  description: string;
  /** Category photo. Leave out to show the placeholder. */
  image?: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    id: 'exercise-books',
    name: 'Exercise Books',
    groups: ['school'],
    description: 'Everyday ruled and exercise books for learners of all levels.',
    image: '/images/categories/exercise-books.jpeg',
    products: [
      { name: 'A4 Exercise Books', description: 'Large ruled books for notes, assignments and projects.', image: '/images/products/a4-exercise-book.jpeg' },
      { name: 'A5 Exercise Books', description: 'Compact ruled books, easy to carry and store.', image: '/images/products/a5-exercise-book.jpeg' },
      { name: 'A4 Squared / Graph Books', description: 'Gridded pages for maths, science and technical work.' },
      { name: 'Counter Books', description: 'Hard-covered record books for shops and offices.' },
      { name: 'Manuscript Books', description: 'Wide-ruled books for early writers.' },
      { name: 'Composition Books', description: 'Sewn, durable books for long-term note keeping.' }
    ]
  },
  {
    id: 'math-sets',
    name: 'Math Sets',
    groups: ['school'],
    description: 'Practical geometry tools and calculators for classroom work and examinations.',
    image: '/images/categories/math-sets.jpeg',
    products: [
      { name: 'Mathematical Set', description: 'Compass, divider, protractor, set squares and ruler in one case.', image: '/images/products/mathematical-set.jpeg' },
      { name: 'Scientific Calculators', description: 'Exam-ready calculators for maths and science.', image: '/images/products/scientific-calculator.jpeg' },
      { name: 'Logarithm Tables', description: 'Standard mathematical tables for secondary school.', image: '/images/products/logarithm-tables.jpeg' },
      { name: 'Protractors', description: 'Clear 180° protractors for accurate angles.', image: '/images/products/protractors.jpeg' },
      { name: 'Set Squares', description: '45° and 60° set squares for geometry and drawing.', image: '/images/products/set-squares.jpeg' },
      { name: 'Rulers (15cm / 30cm)', description: 'Plastic and wooden rulers in common sizes.', image: '/images/products/rulers.jpeg' }
    ]
  },
  {
    id: 'drawing-art',
    name: 'Drawing & Art Supplies',
    groups: ['school'],
    description: 'Colouring tools, paints, pads and creative essentials.',
    image: '/images/categories/drawing-art.jpeg',
    products: [
      { name: 'Coloured Pencils', description: 'Boxed sets in a range of colours.', image: '/images/products/coloured-pencils.jpeg' },
      { name: 'Wax Crayons', description: 'Bright, smooth crayons for young artists.', image: '/images/products/wax-crayons.jpeg' },
      { name: 'Water Colour & Poster Paints', description: 'Paint sets and tubes for art class.', image: '/images/products/water-colour-poster-paints.jpeg' },
      { name: 'Paint Brushes', description: 'Assorted sizes for water colour and poster work.', image: '/images/products/paint-brushes.jpeg' },
      { name: 'Sketch & Drawing Pads', description: 'Plain and cartridge paper pads.', image: '/images/products/sketch-drawing-pads.jpeg' },
      { name: 'Stick Glue', description: 'Everyday craft and classroom essentials.', image: '/images/products/stick-glue.jpeg' }
    ]
  },
  {
    id: 'school-bags',
    name: 'School Bags',
    groups: ['school'],
    description: 'Durable everyday bags for books, stationery and school gear.',
    image: '/images/categories/school-bags.jpeg',
    products: [
      { name: 'Primary Bags', description: 'Light, comfortable bags sized for younger learners.', image: '/images/products/primary-bags.jpeg' },
      { name: 'Secondary Backpacks', description: 'Roomy multi-compartment backpacks.', image: '/images/products/secondary-backpacks.jpeg' },
      { name: 'Pencil Cases', description: 'Zip and box cases to keep stationery together.', image: '/images/products/pencil-cases.jpeg' },
      
    ]
  },
  {
    id: 'pens-pencils',
    name: 'Pens & Pencils',
    groups: ['school', 'office'],
    description: 'Writing tools from trusted brands for classrooms, reception desks and offices.',
    image: '/images/categories/pens-pencils.jpeg',
    products: [
      { name: 'Bic Ball Pens', description: 'Reliable everyday ball pens in blue, black and red.', image: '/images/products/bic-ball-pens.jpeg' },
      { name: 'Gel Pens', description: 'Smooth-flowing gel ink for comfortable writing.', image: '/images/products/gel-pens.jpeg' },
      { name: 'Pilot Pens', description: 'Smooth-writing pens for office and school use.', image: '/images/products/pilot-pens.jpeg' },
      { name: 'HB Pencils', description: 'Standard graphite pencils for writing and sketching.', image: '/images/products/hb-pencils.jpeg' },
      { name: 'Faber-Castell / Staedtler Pencils', description: 'Quality pencils for drawing, exams and art.', image: '/images/products/faber-castell-pencils.jpeg' },
      { name: 'Mechanical Pencils & Leads', description: 'Refillable pencils with spare leads.', image: '/images/products/mechanical-pencils-leads.jpeg' }
    ]
  },
  {
    id: 'notebooks-memo',
    name: 'Notebooks & Memo Pads',
    groups: ['office'],
    description: 'Neat note-taking essentials for meetings, desks and planning.',
    image: '/images/categories/notebooks-memo.jpeg',
    products: [
      { name: 'Spiral Notebooks', description: 'Wire-bound notebooks in several sizes.', image: '/images/products/spiral-notebooks.jpeg' },
      { name: 'Hardcover Notebooks', description: 'Sturdy notebooks for meetings and journals.', image: '/images/products/hardcover-notebooks.jpeg' },
      { name: 'Sticky Notes', description: 'Repositionable notes in assorted colours.', image: '/images/products/sticky-notes.jpeg' },
      { name: 'Memo Pads', description: 'Tear-off pads for quick messages and reminders.', image: '/images/products/memo-pads.jpeg' },
      { name: 'Diaries & Planners', description: 'Yearly and weekly planners.', image: '/images/products/diaries-planners.jpeg' }
    ]
  },
  {
    id: 'files-folders',
    name: 'Files & Folders',
    groups: ['office'],
    description: 'Organise documents, records and paperwork with practical filing supplies.',
    image: '/images/categories/files-folders.jpeg',
    products: [
      { name: 'Box / Lever Arch Files', description: 'Heavy-duty files for long-term records.', image: '/images/products/box-lever-arch-files.jpeg' },
      { name: 'Ring Binders', description: 'Binders with 2 or 4 rings.', image: '/images/products/ring-binders.jpeg' },
      { name: 'Manilla Folders', description: 'Everyday folders for sorting loose papers.', image: '/images/products/manilla-folders.jpeg' },
      { name: 'Document Wallets', description: 'Plastic wallets with a snap or zip closure.', image: '/images/products/document-wallets.jpeg' },
      { name: 'Plastic Sleeves', description: 'Punched pockets to protect important pages.', image: '/images/products/plastic-sleeves.jpeg' }
    ]
  },
  {
    id: 'desk-accessories',
    name: 'Desk Accessories',
    groups: ['office'],
    description: 'Staplers, clips, scissors and other desk essentials.',
    image: '/images/categories/desk-accessories.jpeg',
    products: [
      { name: 'Staplers & Staples', description: 'Desktop and heavy-duty staplers with refills.' },
      { name: 'Paper Clips & Binder Clips', description: 'Assorted sizes for holding papers together.' },
      { name: 'Scissors & Paper Cutters', description: 'Everyday cutting tools for the office.' },
      { name: 'Tape & Tape Dispensers', description: 'Clear, masking and packaging tape.' },
      { name: 'Hole Punches', description: 'Two-hole punches for filing.' }
    ]
  },
  {
    id: 'printing-paper',
    name: 'Printing Paper',
    groups: ['office'],
    description: 'Everyday paper supplies for office printing and administration.',
    image: '/images/categories/printing-paper.jpeg',
    products: [
      { name: 'A4 Copy Paper (75gsm)', description: 'Reams of everyday paper for printers and copiers.', image: '/images/products/a4-copy-paper.jpeg' },
      { name: 'A3 Paper', description: 'Larger format for drawings and posters.', image: '/images/products/a3-paper.jpeg' },
      { name: 'Coloured Paper', description: 'Assorted colours for printing and crafts.', image: '/images/products/coloured-paper.jpeg' },
      { name: 'Photo Paper', description: 'Glossy and matte paper for photo printing.', image: '/images/products/photo-paper.jpeg' },
      { name: 'Thermal Rolls', description: 'Receipt and POS machine rolls.', image: '/images/products/thermal-rolls.jpeg' }
    ]
  },
  {
    id: 'markers-highlighters',
    name: 'Markers & Highlighters',
    groups: ['office'],
    description: 'Bright, dependable marking tools for documents and presentations.',
    image: '/images/categories/markers-highlighters.jpeg',
    products: [
      { name: 'Highlighters', description: 'Fluorescent highlighters in assorted colours.', image: '/images/products/highlighters.jpeg' },
      { name: 'Permanent Markers', description: 'Waterproof markers for most surfaces.', image: '/images/products/permanent-markers.jpeg' },
      { name: 'Whiteboard Markers', description: 'Easy-wipe markers for boards and classrooms.', image: '/images/products/whiteboard-markers.jpeg' },
      
    ]
  },
  {
    id: 'sports',
    name: 'Sports Equipment',
    groups: ['sports'],
    description: 'Balls, whistles and gear for school teams, PE lessons and weekend games.',
    image: '/images/categories/sports.jpeg',
    products: [
      { name: 'Footballs', description: 'Match and training footballs in standard sizes.', image: '/images/products/footballs.jpeg' },
      { name: 'Basketballs', description: 'Indoor and outdoor basketballs for training and matches.', image: '/images/products/basketballs.jpeg' },
      { name: 'Volleyballs', description: 'Soft-touch volleyballs for school and club play.', image: '/images/products/volleyballs.jpeg' },
      { name: 'Netballs', description: 'Durable netballs for school and league games.', image: '/images/products/netballs.jpeg' },
      { name: 'Tennis Balls', description: 'Pressurised tennis balls for practice and play.', image: '/images/products/tennis-balls.jpeg' },
      { name: 'Whistles', description: 'Loud, durable whistles for referees, coaches and PE teachers.', image: '/images/products/whistles.jpeg' },
      { name: 'Skipping Ropes', description: 'Adjustable ropes for fitness and play.', image: '/images/products/skipping-ropes.jpeg' },
      { name: 'Cones & Sports Bibs', description: 'Training cones and team bibs.', image: '/images/products/ cones-and-sports-bibs.jpeg' }
    ]
  }
];
