// HOD - 467 Câu hỏi History of Design
// Trích xuất & chuẩn hoá từ Google Docs

const HOD_QUESTIONS = [
  {
    "question": "Which statement is correct?",
    "options": [
      "A. The aesthetic movement appeared before the arts and crafts movement.",
      "B. The aesthetic movement appeared same time the arts and crafts movement",
      "C. The aesthetic movement appeared after the arts and crafts movement",
      "D. All is incorrect"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 1
  },
  {
    "question": "Which artistic group was founded in the Dutch city of Leiden in 1917?",
    "options": [
      "A. The Bauhaus",
      "B. De Stijl",
      "C. Constructivism",
      "D. The Arts and Crafts Movement"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 2
  },
  {
    "question": "In ancient China, the ____ plow, crossbow, propeller, and magnetic compass were invented.",
    "options": [
      "A. bronze",
      "B. iron",
      "C. silver",
      "D. steel"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 3
  },
  {
    "question": "What immutable principles were laid down by the British artist William Hogarth in his book The Analysis of Beauty (published in 1753)?",
    "options": [
      "A. simplicity",
      "B. harmony",
      "C. nature",
      "D. propotion",
      "E. fitness"
    ],
    "answer": [
      "A",
      "D",
      "E"
    ],
    "multiAnswer": true,
    "id": 4
  },
  {
    "question": "Who was one of the greatest proponents of the Rococo style, who published a book entitled \"The Gentleman and Cabinet Maker's Director\", which was lavishly illustrated with 161 engraved plates showing \"elegant and useful designs of household furniture in the Gothic, Chinese and modern taste\"?",
    "options": [
      "A. Thomas Chippendale",
      "B. Jean-Francois Leleu",
      "C. Thomas Sheraton",
      "D. Robert Adam"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 5
  },
  {
    "question": "Which country's designers have thoroughly applied the streamlining form less for functional reasons and more to make household products look sleeker and thereby more tempting to the customer?",
    "options": [
      "A. England.",
      "B. Germany.",
      "C. France.",
      "D. America."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 6
  },
  {
    "question": "This picture shows a red-blue chair designed by Gerrit Rietveld. What style is it?",
    "options": [
      "A. Art and Craft.",
      "B. De Stijl.",
      "C. Art Nouveau.",
      "D. Pop Art."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 7
  },
  {
    "question": "In the mid-19th century, why did Henry Cole and Adolf Loos consider the ornament as one of the basic factors hindering the development of industrial design?",
    "options": [
      "A. Waste of labor and time.",
      "B. Impedes the intended function of an object.",
      "C. Waste of materials and energy.",
      "D. All of the above."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 8
  },
  {
    "question": "In addition to the Japanese influence, what other decorative motifs have been recurred in Aesthetic movement style interiors?",
    "options": [
      "A. Magnolia",
      "B. Sea anemones",
      "C. Dragon",
      "D. Sunflowers and peacock feathers"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 9
  },
  {
    "question": "(Kiểu hỏi khác: What were two decorative motifs commonly found in Aesthetic Movement interiors?) Vietnamese-French designer Nguyen Manh Khanh, who known as Quasar, developed the first inflatable furniture product line, in 1967. What is the name of this collection?",
    "options": [
      "A. None of the answer",
      "B. The Fiction collection,",
      "C. The Future Astronaut collection",
      "D. The Aerospace collection"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 10
  },
  {
    "question": "What are the characteristics of the Postmodern design?",
    "options": [
      "A. Exuberantly playful, capturing the optimism, color combinations, bold overall forms.",
      "B. Exuberantly playful, capturing the optimism, bold overall forms.",
      "C. It had roots in social ideas related to health and inclusivity.",
      "D. It was far playful in its use of coded meanings and mixed messages."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 11
  },
  {
    "question": "How many ages in the history of development of human beings in prehistoric periods?",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 12
  },
  {
    "question": "What was the reason for the Pop Art movement thriving in the 1960s?",
    "options": [
      "A. Meet the needs of enjoying the diverse arts of popular people.",
      "B. Meet the novelty of commodity models in a highly competitive market.",
      "C. The development of new materials and manufacturing techniques, allowing machines to create richer shapes and colours.",
      "D. All three reasons above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 13
  },
  {
    "question": "While the kind of standardization, allowing a degree of interchangeability, had been used previously to make weapons in ancient China and during the Roman period, who was the first to employ it within the context of industrial mechanization?",
    "options": [
      "A. Eli Whitney",
      "B. Samuel Colt",
      "C. Thomas Blanchard",
      "D. Alexander Graham Bell"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 14
  },
  {
    "question": "What did Augustus Welby Northmore Pugin (A.W.N. Pugin) design in Westminster, London?",
    "options": [
      "A. Buckingham Palace",
      "B. Westminster Abbey",
      "C. The interiors of Westminster Palace",
      "D. The Tower of London"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 15
  },
  {
    "question": "The mass-production of weaponry perfected in American factories during the mid-nineteenth century changed the face of military conflict permanently. Which war was the first instance of this modern industrialized warfare?",
    "options": [
      "A. Civil War of 1861-65",
      "B. World War I",
      "C. World War II",
      "D. None of the answer."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 16
  },
  {
    "question": "Fill in the blank: By the late of nineteenth century, Germany had become a significant industrial powerhouse. However, most of this part was based on the processes that had been borrowed from British. The products was ....with ....quality.",
    "options": [
      "A. Cheap ... low",
      "B. Cheap ....good",
      "C. Expensive....low",
      "B. Expensive...good"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 17
  },
  {
    "question": "What kind of materials did British designers and engineers use when facing difficulties due to the scarcity of raw materials in postwar Britain?",
    "options": [
      "A. Any material they can find.",
      "B. Plastic.",
      "C. Wood.",
      "D. Steel."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 18
  },
  {
    "question": "For a period of roughly eighty years of seismic social and political change - from around 1750- to 1830 - Neoclassism was the dominant style in art, architecture, and design. While in England it is most commonly referred to as Georgian or Regency, in France Neoclassism became known as Empire style. In America, what another name was Neoclassism called, thanks to its political connotation?",
    "options": [
      "A. Gustavian style",
      "B. Directoire style",
      "C. Mannerist style",
      "D. Federal style"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 19
  },
  {
    "question": "For a period of roughly eighty years of seismic social and political change - from around 1750 to 1830, what style was dominant style in art, architecture and design?",
    "options": [
      "A. Art Deco",
      "B. Art Nouveau",
      "C. Baroque",
      "D. Neoclassicism"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 20
  },
  {
    "question": "In 1973, what crisis prompted US carmakers to explore more \"compact\" fuel-efficient cars?",
    "options": [
      "A. Resources.",
      "B. Oil crisis.",
      "C. Economic crisis.",
      "D. Labour resources."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 21
  },
  {
    "question": "In the late of 1960s and 1970s, many designers looked to the future optimistically and created products for an age in which everything would be shiny, clean, and bright; the visions they conjured offered a much-needed respite from the Vietnam War and other earthbound troubles. What kind of design movement is mentioned above?",
    "options": [
      "A. Plastic age.",
      "B. Design goes pop.",
      "C. Space-Age visions",
      "D. Postmodernism."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 22
  },
  {
    "question": "Fill in the blank: During the postwar years, another aspect of American design evolved out of wartime research into \"human factors\": called ....",
    "options": [
      "A. Designing for People",
      "B. Anthropometric Design",
      "C. Organic design",
      "D. Italian design"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 23
  },
  {
    "question": "Which event in 1925 helped solidify the prominence of Art Deco and also showcased early",
    "options": [
      "A. Exposition Universelle",
      "B. International Hygiene Exhibition",
      "C. Exposition Internationale des Arts Décoratifs et Industriels Modernes",
      "D. Weissenhof Housing Exhibition"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 24
  },
  {
    "question": "In the 1920s, who realized that aesthetics would play an increasingly important role over the coming years in differentiating products?",
    "options": [
      "A. General Motors chairman Alfred Sloan",
      "B. Adolf Loos",
      "C. William Hogarth",
      "D. Henry Cole"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 25
  },
  {
    "question": "What are the main causes of German industry development? Check two options.",
    "options": [
      "A. Aesthetic response to the Industrial Revolution.",
      "B. Germany yearned for a strong and powerful state.",
      "C. The level of educational attainment among citizens is high.",
      "D. Advertising boomed."
    ],
    "answer": [
      "B",
      "C"
    ],
    "multiAnswer": true,
    "id": 26
  },
  {
    "question": "Who were the founders of Britain's first important Arts and Crafts group, the Century Guild of Artists?",
    "options": [
      "A. William Morris and Charles Voysey",
      "B. Arthur Heygate Mackmurdo and Selwyn Image",
      "C. Eliel Saarinen and Charles Rennie Mackintosh",
      "D. Elias Lönnrot and Holm Hansen Munthe"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 27
  },
  {
    "question": "What were a number of other military designs first appeared during World War I?",
    "options": [
      "A. chemical weapons such as mustard gas, biplanes used for bombing",
      "B. aerial reconnaissance, submarines",
      "C. tanks",
      "D. All of the answers."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 28
  },
  {
    "question": "In 1949, it was the most famous house (1949) - now better known as the Eames House-in Pacific Palisades, the self-designed home of Charles and Ray Eames. What is the name of this house?",
    "options": [
      "A. Case Study House No. 6",
      "B. Case Study House No. 7",
      "C. Case Study House No. 8",
      "D. Case Study House No. 9"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 29
  },
  {
    "question": "This picture shows an image of the side chair designed by Harvey Ellis for Gustav Stickley, c. 1903. What style is this?",
    "options": [
      "A. Neoclassicism",
      "B. Bauhaus",
      "C. Arts and Crafts movement in Britain",
      "D. Arts and Crafts movement in American"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 30
  },
  {
    "question": "This picture shows an image of the interior of the Osterreichische Postparkasse (Austrian Postal Savings Bank) in Vienna designed by Otto Wagner, 1906. What style is this? a. Vienna Secession b. Bauhaus c. Destijl d. Constructivism a Hình ảnh: This picture shows an image of the interior of the Osterreichische Postparkasse (Austrian Postal Savings Bank) in Vienna designed by Otto Wagner, 1906. What style is this? a. Vienna Secession b. Bauhaus c. Destijl d. Constructivism This picture shows an image of the Finnish Pavilion designed by the architect Eliel Saarinen, perhaps Finland's greatest exponent of National Romanticism, who pioneered a style of architecture and design that alluded to his country's ancient Karelian culture. Where the motifs on this building inspired? a. Viking-revival style b. Dragon motifs c. Nature d. Nordic folk art and vernacular architecture d Hình ảnh: This picture shows an image of the Finnish Pavilion designed by the architect Eliel Saarinen, perhaps Finland's greatest exponent of National Romanticism, who pioneered a style of architecture and design that alluded to his country's ancient Karelian culture. Where the motifs on this building inspired? a. Viking-revival style b. Dragon motifs c. Nature d. Nordic folk art and vernacular architecture This picture shows an image of the Viking-revival armchair designed by Lars Kinsarvik that revealed a romantic notion of Norway's past with the motif of Dragon. What style was it designed? a. Classicism b. Neo-Classicism c. Modernism d. National Romanticism d Hình ảnh: This picture shows an image of the Viking-revival armchair designed by Lars Kinsarvik that revealed a romantic notion of Norway's past with the motif of Dragon. What style was it designed? a. Classicism b. Neo-Classicism c. Modernism d. National Romanticism This picture shows an image of a highly innovative chair designed by Arthur Heygate Mackmurdo for the guild's dining hall that featured a back splat incorporating an asymmetrical motif of swirling foliage stems. What style was it designed? a. Arts and Crafts movement in Britain b. Arts and Crafts movement in America c. Aesthetic movement d. Neo-classicism a Hình ảnh: This picture shows an image of a highly innovative chair designed by Arthur Heygate Mackmurdo for the guild's dining hall that featured a back splat incorporating an asymmetrical motif of swirling foliage stems. What style was it designed? a. Arts and Crafts movement in Britain b. Arts and Crafts movement in America c. Aesthetic movement d. Neo-classicism This picture shows an image of the interior of the Dana Thomas House in Springfield, Illinois, that the architect took an enormous care in the minute detailing of his building, and more than any other individual he bridged the transition between the Arts and Crafts movement and the later International Style through his unified architectural schemes. Who is the architect mentioned above? a. Ludwig Mies Van der Rohe b. Frank Lloyd Wright c. Le Corbusier d. Walter Gropius b Hình ảnh: This picture shows an image of the interior of the Dana Thomas House in Springfield, Illinois, that the architect took an enormous care in the minute detailing of his building, and more than any other individual he bridged the transition between the Arts and Crafts movement and the later International Style through his unified architectural schemes. Who is the architect mentioned above? a. Ludwig Mies Van der Rohe b. Frank Lloyd Wright c. Le Corbusier d. Walter Gropius This picture shows an image of the Salon of Victor Horta's house and studio in Brussels (now the Horta Museum), designed in 1898. What style is this? a. Aesthetic movement b. Art Deco c. High Victorian style d. Art Nouveau d Hình ảnh: This picture shows an image of the Salon of Victor Horta's house and studio in Brussels (now the Horta Museum), designed in 1898. What style is this? a. Aesthetic movement b. Art Deco c. High Victorian style d. Art Nouveau This picture shows an image of the Sagrada Familia church, a very famous Art Nouveau building in Barcelona. The architect borrowed motifs from Gothic and Moorish architecture and then transformed them into exotic melting forms that made it looks like a fanciful fairy-tale castle out of sand. Who is the author of this work? a. Hector Guidmard b. Henry van de Velde c. Frank Lloyd Wright d. Antonio Gaudi d Hình ảnh: This picture shows an image of the Sagrada Familia church, a very famous Art Nouveau building in Barcelona. The architect borrowed motifs from Gothic and Moorish architecture and then transformed them into exotic melting forms that made it looks like a fanciful fairy-tale castle out of sand. Who is the author of this work? a. Hector Guidmard b. Henry van de Velde c. Frank Lloyd Wright d. Antonio Gaudi This picture shows an image of the objects produced and exhibited at the Great Exhibition of all Nations, 1851. This so called \"fancy goods\" were for the most part revivalist wares whose decoration teemed with references to every previous style in history, from Rococo, Baroque, and Neoclassical, to the more unusual Assyrian, Eritrean, and Celtic. What is the name of this style? a. Mannerist style b. High Victorian style c. Empire style d. Queen Anne revival style b Hình ảnh: This picture shows an image of the objects produced and exhibited at the Great Exhibition of all Nations, 1851. This so called \"fancy goods\" were for the most part revivalist wares whose decoration teemed with references to every previous style in history, from Rococo, Baroque, and Neoclassical, to the more unusual Assyrian, Eritrean, and Celtic. What is the name of this style? a. Mannerist style b. High Victorian style c. Empire style d. Queen Anne revival style This picture show an image of an adjustable chair designed by Philip Webb, c. 1870, upholstered in Bird woven textile. What style is this? a. Rocco style b. High Victorian style c. Art Nouveau style d. Arts and Crafts movement d Hình ảnh: This picture show an image of an adjustable chair designed by Philip Webb, c. 1870, upholstered in Bird woven textile. What style is this? a. Rocco style b. High Victorian style c. Art Nouveau style d. Arts and Crafts movement This picture shows an image of a sideboard created by William Godwin in accordance with fashionable taste which captured the spirit of Japan by referencing Japanese motifs and constructions while remaining at the same time very much British \"art furniture\". What style is this?",
    "options": [
      "A. Aesthetic movement",
      "B. Arts and Crafts movement",
      "C. Art Deco",
      "D. The New Art"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 31
  },
  {
    "question": "This picture shows an image of the Casa Batllo in Barcelona, redesigned by Antonio Gaudi, 1904-06. What style is this?",
    "options": [
      "A. Art Nouveau",
      "B. Neo classicism",
      "C. Memphis style",
      "D. Pop art"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 32
  },
  {
    "question": "Fill in the blank: The 1951 Festival of Britain, which marked the centenary of the famous Great Exhibition by celebrating national accomplishment in the sciences and arts. An avowed aim of the Festival of Britain is to show a high standard of ................",
    "options": [
      "A. traditional design",
      "B. modern machinery",
      "C. hand-made products and modern machinery",
      "D. industrial design"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 33
  },
  {
    "question": "Fill in the blank: Vespa 150 scooter designed by Corradino D'Ascanio for......, 1955.",
    "options": [
      "A. Turin joinery shop of Apelli and Varesio",
      "B. Piaggio",
      "C. IBM (International Business Machines)",
      "D. General Motors (GM)"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 34
  },
  {
    "question": "The Darby's Coalbrookdale Foundry was considered to be the earliest commercially manufactured industrial designs in Shropshire, England. What kind of product was manufactured by this factory?",
    "options": [
      "A. Bike.",
      "B. The unpickable tumbler lock.",
      "C. Cast iron cooking pot.",
      "D. Pulley blocks."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 35
  },
  {
    "question": "Fill in the blank: In New York, the Smart Design consultancy was starting revolution in the realm of housewares. This extensive line of kitchen tools, which includes numerous easy to-use products, from......to...., was the brainchild of Sam Farber.",
    "options": [
      "A. vegetable peelers - dustpans and brushes",
      "B. vegetable peelers - brushes",
      "C. vegetable peelers - knife and scissors",
      "D. cast iron pot - dustpans and brushes"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 36
  },
  {
    "question": "When did the digital era had truly begun with the release of the original Apple Macintosh desktop computer, conceived by a youthful Steve Jobs as a $500 product?",
    "options": [
      "A. January 1983",
      "B. January 1984",
      "C. January 1985",
      "D. January 1990"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 37
  },
  {
    "question": "Fill in the blank: The American Dream was transformed into a familial vision of suburban homemaking, it reflected a widespread yearning for a lifestyle that involved ................",
    "options": [
      "A. unparalleled levels of consumption",
      "B. high levels of frugal consumption",
      "C. moderate consumption",
      "D. relatively strong level of consumption"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 38
  },
  {
    "question": "How did the designs in the Art Journal Illustrated Catalogue typically appear?",
    "options": [
      "A. Minimalist and simple",
      "B. Heavily decorated and overly ornate.",
      "C. Modern and abstract",
      "D. Unadorned and functional"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 39
  },
  {
    "question": "What institution did the Constructivists establish as a state-sponsored school of design?",
    "options": [
      "A. VKhUTEMAS",
      "B. Bauhaus",
      "C. Svomas",
      "D. Free State Art Studios"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 40
  },
  {
    "question": "Why is Art Nouveau argued as the first modern style?",
    "options": [
      "A. Throwing off the historicizing, decorative shackles of the past",
      "B. Decoration should always be informed by a design's construction rather than applied as surface ornamentation",
      "C. Logical structure of products, uncompressing logic in the use of materials, proud and frank exhibition of working process",
      "D. All of the above"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 41
  },
  {
    "question": "Which avant-garde building, designed by Le Corbusier, reflected modernism's obsession with hygiene?",
    "options": [
      "A. Pavillon de I'Esprit Nouveau",
      "B. Pavillon du Collectionneur",
      "C. Maison de Verre",
      "D. Citta Nuova"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 42
  },
  {
    "question": "What was the essence of the American approach to design during the late 19th and early 20th ?",
    "options": [
      "A. Functionality and universality",
      "B. Aesthetic appeal",
      "C. Historical tradition",
      "D. Luxury and exclusivity"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 43
  },
  {
    "question": "Who was a great early reformer in design practice and one of the first industrial designers?",
    "options": [
      "A. William Morris",
      "B. Charles Rennie Mackintosh",
      "C. Henry Cole",
      "D. Christopher Dresser"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 44
  },
  {
    "question": "Thomas Chippendale was the British cabinetmaker and furniture designer, who piled his trade in London's fashionable Saint Martin's Lane. This picture visualizes one of his design works. What is the style of the chair?",
    "options": [
      "A. Mannerism.",
      "B. Baroque.",
      "C. Rococo.",
      "D. Neoclassical."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 45
  },
  {
    "question": "From the mid-1930s onwards, a vast number of modern landmark designs made from plastic, were produced for the US market. What are these products?",
    "options": [
      "A. Miniature Baby Brownie Camera.",
      "B. Operating desk lamp (Model No. 114).",
      "C. Refrigerator Coldspot.",
      "D. All of the above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 46
  },
  {
    "question": "Which style does this design belong to?",
    "options": [
      "A. Art and Crafl",
      "B. Modern Art",
      "C. Art Nouveau",
      "D. Aesthetic"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 47
  },
  {
    "question": "In ancient societies, the design of tools and implements was primarily influenced by:...",
    "options": [
      "A. Functional requirements and raw material availability.",
      "B. Artistic trends of the era.",
      "C. The personal preference of the ruling class.",
      "D. Religious and ceremonial needs."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 48
  },
  {
    "question": "Fill in the blank \"... design clearly had roots in social ideas related to health and inclusivity, but it was also a manifestation of the wider return to rationalism in design. Trimmed of all decoration, these items were pure expressions of function, shaped by the data rather than creative intuition. The only drawback was that, for all their enhanced performance, they were rarely what might be considered visually exciting\".",
    "options": [
      "A. Space-Age visions.",
      "B. The Ergonomic",
      "C. Good Design",
      "D. The Biomimicry"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 49
  },
  {
    "question": "Who became Renaissance men? ().",
    "options": [
      "A. Leonardo di Caprio",
      "B. Johann Rupert",
      "C. Benvenuto Cellini",
      "D. Leonardo da Vinci",
      "E. Johannes Gutenberg"
    ],
    "answer": [
      "C",
      "D",
      "E"
    ],
    "multiAnswer": true,
    "id": 50
  },
  {
    "question": "What design movement means \"Twentieth Century\", seeking to revitalize Classicism within a modern idiom?",
    "options": [
      "A. Futurism",
      "B. Novecento",
      "C. Rationalism",
      "D. Art Deco"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 51
  },
  {
    "question": "What is the history of design?",
    "options": [
      "A. The history of objects and their shapes",
      "B. History, culture, aesthetic ideology, interest and behaviour in the relationship between people and objects are reflected in the history of culture and civilization from the beginning until the 20th century.",
      "C. History of scientific and technical developments, mentality, environment...",
      "D. All of the above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 52
  },
  {
    "question": "This is an amphora, a type of pottery of ancient Romans. What are the most striking features of this ceramic vase?",
    "options": [
      "A. Easy carrying and pouring. thanks to its looping handles and long",
      "B. Large capacity, allowing to contain a large amount of olive oil, wine",
      "C. All of the answers",
      "D. Thick ceramic material, the glossy glaze can be easily cleaned, good hygiene, quality assurance, taste for olive oil, wine and garum for a long time."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 53
  },
  {
    "question": "What method of production has been used to make the most beautiful prehistoric ceramics come from Ban Chiang area in north-eastern Thailand?",
    "options": [
      "A. Paddle and anvil.",
      "B. Turntable.",
      "C. Molds made of bamboo.",
      "D. Plaster molds."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 54
  },
  {
    "question": "In ancient Rome, the practice of featuring portraits on coins was popularized under: ...",
    "options": [
      "A. Julius Caesar to promote trade.",
      "B. Augustus Caesar to display wealth.",
      "C. Julius Caesar for propaganda value.",
      "D. Nero to fund his artistic endeavors."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 55
  },
  {
    "question": "In the ___ century, the improved water wheel allowed water power to be harnessed into energy to mill flour, saw wood, and cleanse woolen cloth of impurities.",
    "options": [
      "A. 9th",
      "B. 10th",
      "C. 7th",
      "D. 8th"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 56
  },
  {
    "question": "What was the main function of the improved water wheel during the Middle Ages?",
    "options": [
      "A. To provide irrigation for agriculture",
      "B. To mill flour, saw wood, and cleanse wool",
      "C. To generate electrical power",
      "D. To drive textile machinery"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 57
  },
  {
    "question": "Which of the following represents the characteristics of Rococo style?",
    "options": [
      "A. Popular (designed for the majority)",
      "B. Charming, delicate, overtly feminine, sumptuously opulent",
      "C. Heavy, florid, dramatic.",
      "D. Aesthetic, technical and cheap."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 58
  },
  {
    "question": "What are the enlightenments?",
    "options": [
      "A. The age of reason",
      "B. A cultural movement of intellectuals in 16th century in Europe",
      "C. Mobilize the power of reason to reform society and advance knowledge",
      "D. Challenged age-old religious dogma and promoted scientific knowledge, industrial progress."
    ],
    "answer": [
      "A",
      "C",
      "D"
    ],
    "multiAnswer": true,
    "id": 59
  },
  {
    "question": "Which manufacturer demonstrated for the first time that machinery and its logical implemetation could unequivocally make designs that were not only better in quality but also capable of being produced on a much larger scale and much more cheaply - a wining outcome not only for the Royal Navy but indeed for any canny manufacturer of goods interest in turning a larger profit?",
    "options": [
      "A. Coalbrookdale",
      "B. Wedgwood",
      "C. Portsmouth Block Mills",
      "D. Danhauser Furniture Factory"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 60
  },
  {
    "question": "Who took the Biedermeier style's simplification of form and construction to an even greater reductivist level with laminated wood, using thin veneers that were glued together, placed into molds, and then cured into the required form?",
    "options": [
      "A. Robert Adam",
      "B. Thomas Sheraton",
      "C. William Morris",
      "D. Michael Thonet"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 61
  },
  {
    "question": "What laws were adopted in the United States that led to the rapid industrialization of the United States that occurred during the nineteenth century, especially after the Civil War? Check two options.",
    "options": [
      "A. Low wage",
      "B. The Patent Act of 1836",
      "C. The federal Law which increased import duties",
      "D. Public Investment Policy"
    ],
    "answer": [
      "B",
      "C"
    ],
    "multiAnswer": true,
    "id": 62
  },
  {
    "question": "Before being known as the first to standardize the manufacturing process of weapons, what industrial invention did Eli Whitney become famous for?(073-356-8678)",
    "options": [
      "A. The ingenious cotton gin",
      "B. The Spinning jenny",
      "C. The Singer machine",
      "D. The Typewriter"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 63
  },
  {
    "question": "Which social class particularly benefited from the Industrial Revolution?",
    "options": [
      "A. The lower class",
      "B. The middle class",
      "C. The aristocracy",
      "D. The peasantry"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 64
  },
  {
    "question": "Who was Henry Cole and what was his contribution to the field of industrial design?",
    "options": [
      "A. A manufacturer who resisted design changes",
      "B. A politician who promoted industrial interests",
      "C. An industrial designer who put theory into practice",
      "D. A social reformer who opposed industrialization"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 65
  },
  {
    "question": "Who initiated the Gothic revival movement?",
    "options": [
      "A. William Morris.",
      "B. Walter Gropius.",
      "C. Louis Sullivan.",
      "D. A. W. N. Pugin."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 66
  },
  {
    "question": "What principle was fundamental to William Morris's practice of design?",
    "options": [
      "A. Mechanization and industrial production",
      "B. The idea of fellowship and sharing of interests among people",
      "C. Minimalism and simplicity",
      "D. Gothic Revival architecture"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 67
  },
  {
    "question": "It was a style that looked optimistically to the future rather than nostalgically to the past, using as its primary source of inspiration the visually seductive and tactile forms of the natural world. It was also a truly international style that was adopted comprehensively across all realms of the applied arts: from glassware, furniture, and lighting to jewelry, graphic design, and typography. What is this style?",
    "options": [
      "A. Neo Classicism",
      "B. De Stijl",
      "C. Art Nouveau",
      "D. Organic design"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 68
  },
  {
    "question": "What was the outcome of the Dresden Exhibition for the German Arts and Crafts movement?",
    "options": [
      "A. It led to the discontinuation of the movement",
      "B. It showcased a shift towards functionality in design over artistic expressiveness",
      "C. It focused on reintroducing historical art styles",
      "D. It emphasized the need for more ornamental arts education"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 69
  },
  {
    "question": "What work of Adolf Loos has marked an intellectual turning point that led to a complete rejection of decorative motifs and towards a purely functional style?",
    "options": [
      "A. Studies in Design.",
      "B. Ornament and Crime.",
      "C. Arches Warenbüch.",
      "D. Principles Decorative Design."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 70
  },
  {
    "question": "What are the characteristics of De Stijl movement?",
    "options": [
      "A. Considering ornament is a crime.",
      "B. A rational new world would emerge from geometrically symbolic art.",
      "C. Art must be associated with function.",
      "D. All of the above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 71
  },
  {
    "question": "Like De Stijl, Constructivism had distinctly utopian goals and sought to bring about new social order by introducing a fresh formal language in art and design. Where did \"Constructivism\" movement come from?",
    "options": [
      "A. Poland",
      "B. Italy",
      "C. Russia.",
      "D. Germany."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 72
  },
  {
    "question": "Fill in the blank: The German Pavilion at the 1929 Barcelona International Exposition by Ludwig Mies van the great landmark buildings of 20th-century architecture, harmoniously blending radically forms and industrial materials such as steel and glass with materials more traditionally ass namely: ...",
    "options": [
      "A. marble, red onyx, and travertine",
      "B. marble, red onyx",
      "C. red onyx and travertine",
      "D. Marble and travertine"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 73
  },
  {
    "question": "This picture reveals an urban-planning proposal designed by Antonio Sant'Elia (1914), in which the author argued for the abolishment of decoration and for transcience in design and architecture. What style did he follow?",
    "options": [
      "A. The Aesthetic Movement",
      "B. De Sijl.",
      "C. Constructivism.",
      "D. Futurism."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 74
  },
  {
    "question": "Which designer's work at the 1925 Paris exhibition epitomized the luxurious and decorative nature of Art Deco?",
    "options": [
      "A. Le Corbusier",
      "B. Emile-Jacques Ruhlmann",
      "C. Marcel Breuer",
      "D. Walter Gropius"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 75
  },
  {
    "question": "Fill in the blank: American culture was now heavily driven by mass consumption. One of the greatest symbols of America's new culture and its industrial ascendancy was General Motors (GM), which during the 1950s became the first corporation ever to gross .......... dollars a year.",
    "options": [
      "A. nine billion",
      "B. ten billion",
      "C. five hundred million",
      "D. a billion"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 76
  },
  {
    "question": "What are the criteria (or characteristics) of Good Design?",
    "options": [
      "A. Pure forms, practical function, appropriate use of materials, restrained use of color, high-quality construction, good value for money",
      "B. Pure forms, practical function, appropriate use of materials, restrained use of color and emotional connections.",
      "C. Based on decorative details, focusing on performance, high-quality construction, good value for money",
      "D. Based on aesthetic value and functional use of the product, high-quality construction, good value for money"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 77
  },
  {
    "question": "What is the meaning of the word \"Pop\" in the name of Pop Art style?",
    "options": [
      "A. Modern and trendy.",
      "B. Nostalgia.",
      "C. Traditional.",
      "D. Popular (designed for a mass audience)."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 78
  },
  {
    "question": "When did the Pop art movement begin to thrive?",
    "options": [
      "A. 1960s.",
      "B. 1970s.",
      "C. 1980s.",
      "D. 1990s."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 79
  },
  {
    "question": "What are the roots of Ergonomic design?",
    "options": [
      "A. Social ideas related to health and inclusivity",
      "B. A manifestation of the wider return to rationalism in design",
      "C. The social ideas related to health and inclusivity, but it was also a manifestation of the wider return to rationalism in design.",
      "D. None of the answer"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 80
  },
  {
    "question": "This is Niels Diffrient's Humanscale 1/2/3 manual, designed by Henry Dreyfuss Associates, 1974. What is the name of the design that applies this manual?",
    "options": [
      "A. Organic design.",
      "B. Anthropometric.",
      "C. Creative Salvage.",
      "D. Ergonomics"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 81
  },
  {
    "question": "By whom was the \"Form follows function\" philosophy mentioned?(073-356-8678)",
    "options": [
      "A. Adolf Loos.",
      "B. William Morris.",
      "C. Walter Gropius.",
      "D. Louis Sullivan."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 82
  },
  {
    "question": "The flowering of the \"New Art\" in the 1890s was in international phenomenon that played a key role in the story of design, which went a number of names depending on where it occurred. What did they call the \"New Art\" in Austria?",
    "options": [
      "A. Art Nouveau",
      "B. Jugendstil",
      "C. Modernisimo",
      "D. Vienna Secession"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 83
  },
  {
    "question": "Where did Thomas Edison establish his \"invention factory\"?",
    "options": [
      "A. Menlo Park, New Jersey",
      "B. Detroit, Michigan",
      "C. Philadelphia, Pennsylvania",
      "D. Chicago, Illinois"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 84
  },
  {
    "question": "Fill in the blank: By the mid-to-late 1920s, in the manufacturers, especially in the automotive industry, ___ as a business asset, since it allowed them to offer more purchasing options to potential customers.",
    "options": [
      "A. color",
      "B. luxury styling",
      "C. premium materials",
      "D. modern design"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 85
  },
  {
    "question": "d What year was the advent of motion-picture \"talkies?",
    "options": [
      "A. 1927",
      "B. 1926",
      "C. 1925",
      "D. 1945"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 86
  },
  {
    "question": "What is the style of the Teak ice-bucket designed by Jens Quistgard, 1960?",
    "options": [
      "A. Good Design",
      "B. Gute Form",
      "C. Italian Design",
      "D. Scandinavian Style"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 87
  },
  {
    "question": "What is the name of this product?",
    "options": [
      "A. Bluebird 566 radio designed by Walter Dorwin Teague for Sparton, 1935-36-with what Edgar Kauffman, Jr., called its \"speed whiskers\".",
      "B. T24 portable transistor radio designed by Dieter Rams for Braun, 1956.",
      "C. SK4 record player designed by Dieter Rams and Hans Gugelot for Braun, 1957, nicknamed \"Snow White's Coffin\".",
      "D. TP1 portable radio and phonograph designed by Dieter Rams for Braun, 1959."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 88
  },
  {
    "question": "Fill in the blank: West Germany looked to build a better future once it became politically independent, in 1949. By putting its faith in the transformative power of ..., West Germany eventually became a major exporter of beautifully designed and engineered products that brought about the Wirtschaftswunder-the economic miracle of the mid-1950s.",
    "options": [
      "A. Gute Form",
      "B. Good Design",
      "C. constructivism",
      "D. biomorphism"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 89
  },
  {
    "question": "Fill in the blank: As part of the wider postmodern movement, Creative Salvage helped to revolutionize design in much the same way that Punk changed music and fashion. Also, it was significant to the subsequent development of avant-garde design because it helped to break down traditional barriers between ....",
    "options": [
      "A. Art and craft",
      "B. Craft and design",
      "C. Art, craft, and design",
      "D. None of the answer"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 90
  },
  {
    "question": "Creative Salvage helped to revolutionize the design in much the same way that Punk changed music and fashion. Also, it was significant to the subsequent development of avant-garde design because it helped to break down traditional barriers between art, craft, and design. What is the key to Creative Salvage's success?",
    "options": [
      "A. The recycling of scrap to form stylish and functional artefacts for the home and office.",
      "B. The aesthetic and emotional values, use of natural materials.",
      "C. Prioritizing the use of natural materials scrap to form stylish and functional artefacts for the home and office.",
      "D. The exuberantly playful, capturing the optimism, color combinations, bold overall forms."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 91
  },
  {
    "question": "What movement must be seen as the first truly radical design movement, not only in Italy but anywhere in the world?",
    "options": [
      "A. Futurism",
      "B. Novecento",
      "C. Art Deco",
      "D. Rationalism"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 92
  },
  {
    "question": "What style means \"Twentieth Century\", seeking to revitalize Classicism within a modern idiom?",
    "options": [
      "A. Futurism",
      "B. Rationalism",
      "C. Art Deco",
      "D. Novecento"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 93
  },
  {
    "question": "What style demonstrates similar design principles as the Bauhaus?",
    "options": [
      "A. De Stil",
      "B. Art and Craft.",
      "C. Art Deco.",
      "D. Art Nouveau."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 94
  },
  {
    "question": "What style appeared in fashion and music around 1974, and soon make the leap to graphic and product design?",
    "options": [
      "A. Retro.",
      "B. Punk.",
      "C. Pop art.",
      "D. Memphis."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 95
  },
  {
    "question": "What style demonstrates the \"Visually appealing\" rather than functional?",
    "options": [
      "A. Art Nouveau.",
      "B. Art and Craft.",
      "C. Art Deco.",
      "D. Bauhaus."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 96
  },
  {
    "question": "What was the lifestyle of young consumers which drive the rise of being inexpensive, easy to transport and reassemble furniture in the 1960s?",
    "options": [
      "A. Alone.",
      "B. Enjoy.",
      "C. Nomadic.",
      "D. Early marriage."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 97
  },
  {
    "question": "What is the name of this architect?",
    "options": [
      "A. Adolf Loos",
      "B. A. W. N. Pugin.",
      "C. Walter Gropius",
      "D. Thomas Chippendale"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 98
  },
  {
    "question": "In what style was Eero Saarinen's TWA (Trans World Airlines) Terminal (1956-62) at New York's Idlewild Airport (now John F. Kennedy Airport) designed?",
    "options": [
      "A. Organic Design",
      "B. Italian Design",
      "C. Good Design",
      "D. None of the answer"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 99
  },
  {
    "question": "This picture shows the Queen Marie Antoinette's Golden Room at Château de Versailles designed by Jean Henri Riesener in 1783? What style is it?",
    "options": [
      "A. Empire.",
      "B. Neoclassicism",
      "C. Art Nouveau.",
      "D. Art Deco"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 100
  },
  {
    "question": "This is the oak bed carved with wooden boards called the Great Bed of Ware designed by Hans Vredeman de Vries. What period was this bed created in?",
    "options": [
      "A. Renaissance.",
      "B. 17th century.",
      "C. 18th century.",
      "D. 19th century."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 101
  },
  {
    "question": "What was the style of the Entrance to the Metropolitan Metro Station in Paris, designed by Guimard in 1898?",
    "options": [
      "A. Art Deco.",
      "B. Art and Craft.",
      "C. Art Nouveau.",
      "D. Constructivism."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 102
  },
  {
    "question": "This picture demonstrates one of the most famous work of Benvenuto Cellini in the 16th century. What style was it designed?",
    "options": [
      "A. Mannerist.",
      "B. Baroque.",
      "C. Rococo.",
      "D. Neoclassical."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 103
  },
  {
    "question": "This is a World War I United States Army recruitment poster featuring a half-length portrait of Uncle Sam pointing at the viewer, with the legend \"I want you for U.S. Army\". What year was this poster released?",
    "options": [
      "A. 1913",
      "B. 1914",
      "C. 1917",
      "D. 1919"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 104
  },
  {
    "question": "This picture shows an interior decoration. What style is it?",
    "options": [
      "A. The Aesthetic Movement.",
      "B. De Sijl.",
      "C. Constructivism.",
      "D. Art Nouveau."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 105
  },
  {
    "question": "This picture shows an advertising poster by Alphonse Mucha. What style is it?",
    "options": [
      "A. Bauhaus.",
      "B. De Sijl.",
      "C. Constructivism.",
      "D. Art Nouveau."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 106
  },
  {
    "question": "Where is the Slit tapestry (Red/Green) woven by Gunta Stölzl in 1927-1928?",
    "options": [
      "A. Bauhaus Weaving Workshop",
      "B. State Porcelain Factory in Petrograd",
      "C. VkhUTEMAS - This art and technical institution, founded in Moscow in 1920",
      "D. Nome of the answer"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 107
  },
  {
    "question": "This picture shows an artwork designed by Rene Lalique. What style is it?",
    "options": [
      "A. Art Nouveau.",
      "B. Art and Craft.",
      "C. Art Deco.",
      "D. Constructivism."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 108
  },
  {
    "question": "What is the field of design that William Morris most succeeded in?",
    "options": [
      "A. Architectural and interior decoration design.",
      "B. Pattern design.",
      "C. Fashion Designer.",
      "D. Graphic design."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 109
  },
  {
    "question": "In 1956, which graphic designer created a new logo specifically for IBM (International Business Machines) in 1956?",
    "options": [
      "A. Eliot Noyes",
      "B. Paul Rand",
      "C. Robin Day and Clive Latimer",
      "D. Edgar Kaufmann|"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 110
  },
  {
    "question": "What are the characteristics of Memphis style?",
    "options": [
      "A. All of the above.",
      "B. Capturing the optimism",
      "C. Color combinations, bold overall forms.",
      "D. Exuberantly playful,"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 111
  },
  {
    "question": "What were the ideals of the Aesthetic movement originating from the 19th century?",
    "options": [
      "A. Art for art's sake.",
      "B. Craft for craft's sake.",
      "C. Form and function of harmonious balance.",
      "D. Art combines harmony with function."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 112
  },
  {
    "question": "Art Deco drew its references from:",
    "options": [
      "A. An eclectic range of historic sources, from African tribal art to ancient Egypt.",
      "B. Influenced by contemporary artistic developments.",
      "C. Most notably French Cubism and Italian futurism.",
      "D. All of the above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 113
  },
  {
    "question": "In the early 1970s, which company began experimenting with cellular radio technology, and the results of those tests went on to revolutionize communication devices? In 1973 the company tested the first portable radio phone\" in New York.",
    "options": [
      "A. Sony",
      "B. Samsung",
      "C. Apple",
      "D. Motorola"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 114
  },
  {
    "question": "Streamlining has the meaning of modernity and speed, that is the symbol of which era?",
    "options": [
      "A. Age of space.",
      "B. Plastic age.",
      "C. Machine age.",
      "D. The era of popular arts."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 115
  },
  {
    "question": "Fill in the blank: In 1906, German Arts and Crafts Exhibition held in Dresden revealed a more formal language of design, placing the greater emphasis on functionality, displacing the emotional and artistic expressiveness of ...............",
    "options": [
      "A. Jugendstil.",
      "B. Art Nouveau",
      "C. Vienna Secession",
      "D. Surrealism"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 116
  },
  {
    "question": "The humble potter's wheel was the very first machine to have been designed (from 6,000 to 4,000 BC) to enable the more efficient serial production of designed goods - making pot-throwing the earliest mechanized manufacturing process. Where did it come from?",
    "options": [
      "A. Egypt.",
      "B. Mesopotamia.",
      "C. Greece.",
      "D. China."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 117
  },
  {
    "question": "The term \"design\" was derived from the Latin word \"disegno\". When was it first mentioned?",
    "options": [
      "A. Medieval era",
      "B. Renaissance",
      "C. Industrial age",
      "D. Modern era"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 118
  },
  {
    "question": "Which manufacturer was commissioned to make the colossal entrance gates to the 1851 Great Exhibition that brought the foundry greater international fame?",
    "options": [
      "A. The Portsmouth Block Mills",
      "B. Danhauser Furniture Factory",
      "C. Wedgwood",
      "D. Coalbrookdale"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 119
  },
  {
    "question": "Who was the most famous artist in the De Stijl movement?",
    "options": [
      "A. Andy Warhol.",
      "B. Piet Mondrian.",
      "C. Pablo Picasso.",
      "D. Henry Matisse."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 120
  },
  {
    "question": "What was the goal of the British \"Can Make It\" exhibition in 1946, at the Victoria and Albert Museum? Check two options.",
    "options": [
      "A. To establish foreign markets for well-designed British products.",
      "B. To educate the public about the moral and aesthetic.",
      "C. To educate the public about the moral and economic benefits of Good Design.",
      "D. All of the above."
    ],
    "answer": [
      "A",
      "C"
    ],
    "multiAnswer": true,
    "id": 121
  },
  {
    "question": "Art Nouveau style is considered the most similar to which of the following design styles?",
    "options": [
      "A. Rococo",
      "B. Neo Classicism",
      "C. Memphis style",
      "D. Biomimicry"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 122
  },
  {
    "question": "During World War I, What kind of strategy did Japan use in order to build up an impressively strong naval industry?",
    "options": [
      "A. Copy, innovate.",
      "B. Copy, improve, innovate.",
      "C. Improve, innovate.",
      "D. Copy, innovate."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 123
  },
  {
    "question": "What is the role of the Biomimicry design?",
    "options": [
      "A. The utilitarian approach made sense commercially in a society where middle-class consumers preferred a stylish, sculptural look too bland rationalism.",
      "B. Might offer design solutions to all sorts of ecological problems, from the development of sustainable water schemes to the construction of buildings that store carbon emissions.",
      "C. The design solution is used to recycle scrap to create fashionable and functional artefacts for the home and office.",
      "D. It has promoted the rise of biomorphism, which, rather than attempting to capture the abstracted essence of natural forms, distorted them for purely decorative purposes."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 124
  },
  {
    "question": "Fill in the blank: The Memphis Group went on to create furniture, fabrics, patterns, ceramics and other products in a distinctly Postmodern style that blended stylistic traits of 1950s kitsch, ..................",
    "options": [
      "A. Art Deco",
      "B. Pop Art",
      "C. Art Deco and Pop Art",
      "D. None of the answer"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 125
  },
  {
    "question": "In 1981, which Italian designer founded a group of artists and designers called Memphis?",
    "options": [
      "A. Ettore Sottsass",
      "B. Quasar Khanh",
      "C. Ralph Nader",
      "D. Edgar Kaufmann"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 126
  },
  {
    "question": "In 1959, the Left-leaning Nation magazine published an article named \"The Safe Car You Can't Buy\", in which the author stated the ethical issues surrounding design, manufacture, consumer protection & first attack on safety measures in car design and manufacturing. Who is the author of this article?",
    "options": [
      "A. Joe Colombo.",
      "B. Victor Papanek.",
      "C. Ralph Nader.",
      "D. Verner Panton."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 127
  },
  {
    "question": "Fill in the blank The Italian modern design in 1920 and 1930 was the first cultural movement to distance itself from nature and instead glorify the energetic flux of the metropolis. To this end, ..... designers such as Fortunato Depero used fragmented cubistic forms as a means of evoking acceleration and speed.",
    "options": [
      "A. Futurist",
      "B. Art Deco",
      "C. Bauhaus",
      "D. Rococo"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 128
  },
  {
    "question": "Who was seen as a true Renaissance man or as innovative designer thinker who during his life time was admired as much for his work not only in fine art but also his ability to conceptualize revolutionary designs helped to raise the status of design practice?",
    "options": [
      "A. Michelangelo.",
      "B. Johann Gutenberg.",
      "C. Leonardo da Vinci.",
      "D. Hans Vredeman de Vries."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 129
  },
  {
    "question": "Among the great reformers during the period of the first industrial revolution, who was early identified the problems that many manufacturers saw design as the decoration of an object, rather than as an integral part of its conception, planning, and realization? a. Henry Cole b. Joseph Paxton c. Owen Jones d. Augustus Welby Northmore Pugin a Founded in 1861, Morris & Co sought not only to infuse design with art but also to revitalize the age-old craft traditions, which were by now under severe threat from industrialization and mechanized production. What kinds of products were produced by this above firm?",
    "options": [
      "A. Wallpaper, textiles.",
      "B. Furniture, interior architectural elements.",
      "C. Stained glass windows",
      "D. All of the above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 130
  },
  {
    "question": "The Pope Manufacturing Company achieved impressive production rates in the late nineteenth century thanks to its adoption of armory practice? Which product was considered as iconic of this American firm? a. The Type writer b. The Sewing machine c. The Kodak Brownie camera d. The bicycle d What does the Anthropometric design refer to?",
    "options": [
      "A. Aesthetics and function..",
      "B. Functional.",
      "C. Human factors.",
      "D. Economic profit."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 131
  },
  {
    "question": "What were the two great materials of the First Industrial Revolution in the 18th century?",
    "options": [
      "A. Iron and steel.",
      "B. Tubular metal and leather.",
      "C. Cast iron and steel.",
      "D. Steel and plastic"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 132
  },
  {
    "question": "Fill in the blank: The concept of ...............also permeated DANISH production in these years. To this day Denmark, more than any other nation, is associated with high-quality, well-designed products that have timeless appeal.",
    "options": [
      "A. Organic Design",
      "B. Italian Design",
      "C. Good Design",
      "D. industrial design"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 133
  },
  {
    "question": "war. B This is the B3 \"Wassily\" armchair, designed by Marcel Breuer, 1925. What are the common materials to manufacture this product?",
    "options": [
      "A. Modern tubular steel and leather.",
      "B. Modern tubular steel and fabric.",
      "C. Curling iron and fabric.",
      "D. Curling iron and leather."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 134
  },
  {
    "question": "What material had a great impact on human development towards creating civilization?",
    "options": [
      "A. Concrete",
      "B. Bricks",
      "C. Steel",
      "D. Glass"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 135
  },
  {
    "question": "What material was first applied in mass-production in ancient times?",
    "options": [
      "A. Iron.",
      "B. Steel.",
      "C. Concrete.",
      "D. Brick."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 136
  },
  {
    "question": "The Crystal Palace where the first Great exhibition of all nations took place was an ingenious building design that seemed to encapsulate the future in its soaring construction of tiered girder-work, which covered the old elm trees of Hyde Park to such dramatic effect. What material was this structure built of? a. Brick and Timber b. Concrete and Stone c. Gold and Iron d. Light cast iron and Glass d What is the other name for these design styles: Art Nouveau, Jugendstil, Vienna Secession, Modernism and Stile Liberty?",
    "options": [
      "A. New Art.",
      "B. Art Decor.",
      "C. Gothic Revival.",
      "D. Good Design."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 137
  },
  {
    "question": "Fill in the blank By the mid 19th century, industrial progress had come, but at a price, and the resulting social ills often seemed outweigh the social benefits that it brought. In fact, the Industrial Revolution made ... a. the century embraced National romanticism b. the finance crisis c. the rich richer and the poor poorer d. about a new forward-looking cultural movement c What kind of technology used by the Romans to mass-produce high volumes of fired ceramics wares, most notably oil lamps?",
    "options": [
      "A. Paddle-and-anvil method.",
      "B. Molding",
      "C. Standardization.",
      "D. Interchangeability"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 138
  },
  {
    "question": "What was the purpose of building the Crystal Palace in England in 1851?",
    "options": [
      "A. Playground of the royal family of England.",
      "B. The venue for European glassware exhibitions.",
      "C. The place for the feast of the British nobility.",
      "D. Serving for international design exhibitions"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 139
  },
  {
    "question": "Where was the production of seamless tubular metal pioneered?",
    "options": [
      "A. Austria",
      "B. France",
      "C. Germany",
      "D. Russia"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 140
  },
  {
    "question": "What style has found looking back at the classic past, seeking to reinterpret the classic rules of proportion into a graceful modern form?",
    "options": [
      "A. Classicism.",
      "B. Romanticism.",
      "C. Neoclassicism.",
      "D. Art Decor."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 141
  },
  {
    "question": "What was the purpose of the Great Exhibition of the Works of Industry of all Nations took place in Britain from May 1 to Oct. 11, 1851?",
    "options": [
      "A. Competition and encouragement for both art and industry.",
      "B. Introduce and design houses for the middle class.",
      "C. Encourage industrial development, put theory into practice.",
      "D. Encourage the development of handmade arts."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 142
  },
  {
    "question": "What did the Romans use to equip their vast army weapons to expand and defend their enormous empire?",
    "options": [
      "A. Systems of mass production.",
      "B. Household production.",
      "C. Import from China.",
      "D. Imported from Egypt."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 143
  },
  {
    "question": "When was the blast furnace invented, which allowed iron ore to be smelted at high temperature, reducing impurities and producing stronger iron for the manufacture of higher-quality goods?",
    "options": [
      "A. 9th century.",
      "B. 10th century.",
      "C. 11th century.",
      "D. 12th century."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 144
  },
  {
    "question": "The advent of the internal-combustion engine not only ushered in a transformative era of transportation but also opened a whole new field of design and manufacturing activity, in which Germany led the way. What was the world's first car powered by an internal-combustion engine?",
    "options": [
      "A. Motorwagen by Karl Benz.",
      "B. Henry Ford's Model T automobile, 1908.",
      "C. General Motors (GM)"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 145
  },
  {
    "question": "The Dresden Workshop's acceptance of ... was, however, an important move towards modernism, and its adoption of increasingly geometric forms was early manifestations of a new machine aesthetic.",
    "options": [
      "A. Standardization.",
      "B. Mass-produced.",
      "C. Mechanization.",
      "D. Arts and crafts movement."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 146
  },
  {
    "question": "What kind of design works made Thomas Sheraton famous?",
    "options": [
      "A. An expert in tastes and trends based entirely on his design drawings.",
      "B. Design and production of high-class interior products.",
      "C. Furniture manufacturer.",
      "D. Design buildings for the elite."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 147
  },
  {
    "question": "What kind of manufacturing techniques developed by Michael Thonet, which facilitated the mass production of furniture?",
    "options": [
      "A. Bend wooden sticks with steam at high temperature (the steam-bending of solid wood)",
      "B. The inox plating technique creates a shiny surface.",
      "C. Use plastic materials to shape interior products.",
      "D. Application of metal shaping of interior products."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 148
  },
  {
    "question": "The book that fundamentally altered the design community's approach to the environment. Its authors, William McDonough and Michael Braungart highlighted the waste and destruction wrought when consumer products are made, used, and then discarded. What is the name of this book?",
    "options": [
      "A. Whole Earth Catalog, spring (1969).",
      "B. Human Ecology and Social Change (1971)",
      "C. Cradle to Cradle: Remaking the Way We Make Things (2002)",
      "D. The Upcycle: Beyond Sustainability - Designing (2013)"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 149
  },
  {
    "question": "What are the characteristics of the Mannerist style?",
    "options": [
      "A. Mobility techniques need gravel lobby, try to make the mind sticking high. They worship bizarre beauty, shape language in an unusual way.",
      "B. Heavy and floral, dramatic, full of emotion.",
      "C. Elective, feminine, sumptuous, rich and decorative in Europe.",
      "D. Ignoring the futility of Rococo, inspired by classical Greek and Roman art, emphasizing simplicity and balance, is the bridge for the birth of the Industrial Revolution."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 150
  },
  {
    "question": "Which book has brought a new ecological awareness to public consciousness, indirectly influencing the design, making designers and consumers more aware of the potentially devastating impact of humans on the natural environment?",
    "options": [
      "A. Silent Spring (1962).",
      "B. The Hidden Persuaders.",
      "C. Penguin Books.",
      "D. Arches Warenbüch."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 151
  },
  {
    "question": "In the early 20th century, why were German manufacturers reluctant to accept partial mechanization of certain production processes but still considered it a necessary evil?",
    "options": [
      "A. They believe that machines can produce low quality products at high prices..",
      "B. They still hold the belief that machines are difficult to use.",
      "C. They still hold the belief that machines take away people's jobs and that the products they make are bad.",
      "D. They still kept the belief that the machine could not create high-quality products"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 152
  },
  {
    "question": "Besides the mighty and elite army, what were the reasons for Qin Shi Huang to succeed in the Warring States period? Check two options.",
    "options": [
      "A. The development of better quality materials enabled the production of better performing designs.",
      "B. Weapons have been imported in large quantities from the West.",
      "C. Weapons were produced to such precise specifications that their parts were completely interchangeable",
      "D. Weapons have been handmade carefully, good quality."
    ],
    "answer": [
      "A",
      "C"
    ],
    "multiAnswer": true,
    "id": 153
  },
  {
    "question": "Who was the author of the book \"Principles Decorative Design\" published in 1873?",
    "options": [
      "A. Christopher Dresser.",
      "B. Adolf Loos.",
      "C. Charles Locke Eastlake.",
      "D. Gustav Stickley."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 154
  },
  {
    "question": "Art Nouveau designers took motifs directly from nature- a furling leaf, a peacock feather, a blossoming rose- and dramatically stylized them in designs that invoked dynamic, swirling growth. Which of the following designers are famous for the Art Nouveau style? a. Hector Guimard b. Emile-Jacques Ruhlmann c. Dieter Rams d. Victor Horta ad What were the design trends with playful design languages attract optimism in the early 1980s",
    "options": [
      "A. Art Deco.",
      "B. Memphis",
      "C. Op Art.",
      "D. Pop Art."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 155
  },
  {
    "question": "What were the contributions of Bauhaus in the history of design? Check two options.",
    "options": [
      "A. Bauhaus has been a force of modernization: it has transformed the style towards industrialism in design and thus deeply influenced the story of design.",
      "B. The Bauhaus had been a powerful modernizing force: it transformed design education and thereby profoundly influenced the story of design.",
      "C. Bauhaus existed for a very short time, it changed the mind of the designer, but do not deeply influence the story of the design.",
      "D. Bauhaus existed for a very short time but it brought about dramatic changes in the marketing of design products and thus profoundly influenced the design story."
    ],
    "answer": [
      "A",
      "B"
    ],
    "multiAnswer": true,
    "id": 156
  },
  {
    "question": "The implementation of innovating design standards from the Qin Dynasty reflected in which methods of producing products in the tomb of Qin Shi Huang?",
    "options": [
      "A. Using mass casting method to duplicate terracotta parts, arms, legs, and body.",
      "B. Weapons are applied to specialized production methods and standardized production processes with specifications that are easy to assemble together or interchangeable for parts of other similar products.",
      "C. The production process saves time, easily replicates.",
      "D. All of the above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 157
  },
  {
    "question": "French-Vietnamese designer Nguyen Manh Khanh is also known by what name?",
    "options": [
      "A. Quasar",
      "B. Leo",
      "C. Piter",
      "D. Michel"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 158
  },
  {
    "question": "As a fervent believer in what he saw as the true faith, A. W.N. Pugin felt that Gothic architecture was a transcendental expression of ____",
    "options": [
      "A. Buddhism",
      "B. Catholicism",
      "C. Islam",
      "D. Confucius"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 159
  },
  {
    "question": "What method of production was used to make the most beautiful prehistoric ceramics come from Ban Chiang area in north-eastern Thailand?",
    "options": [
      "A. Paddle and anvil.",
      "B. Turntable.",
      "C. Molds made of bamboo.",
      "D. Plaster molds."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 160
  },
  {
    "question": "In 1886, where was the Workshop of Precision Mechanics and Electromechanics founded by Robert Bosch?",
    "options": [
      "A. Austrian",
      "B. Dresden, German",
      "C. Stuttgart, German",
      "D. Philadelphia, USA"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 161
  },
  {
    "question": "Who was the first design-reformer to highlight what he saw as the parasitic nature of the Victorian bourgeoisie, who profited from the abject drudgery of the working class? He asserted that the mindless production of useless luxuries, which he referred to as \"slave wares\", perpetuated the workers' bondage, and he proposed that all men should be allowed to work worthily. a. William Morris b. William Arthur Smith Benson c. William Godwin d. Christopher Dresser a What was one of the most profound effects that these early mechanized looms?",
    "options": [
      "A. The change in working patterns, with workers, instead of individually laboring at home",
      "B. Increase labor productivity.",
      "C. Increase the number of products.",
      "D. Reduce the cost of products."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 162
  },
  {
    "question": "During the eighteenth century, the Scottish architect Robert Adam essentially pioneered the \"total design look\" for his design works. What is the meaning of \"total design look\"?",
    "options": [
      "A. Simple interior design from wood.",
      "B. Design from overall architecture to interior works unified in a style.",
      "C. The architectural design combined with the garden.",
      "D. Modern graphic design."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 163
  },
  {
    "question": "What structure was built by the first bricks, made of sun-dried mud?",
    "options": [
      "A. Walls of Jericho",
      "B. Walls of Berlin",
      "C. Colosseum arena",
      "D. The Great wall in China"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 164
  },
  {
    "question": "Fill in the blank: The mid-to-late 1970s, most notably in the increasing use of ergonomics in design practice, with the goal of creating better performing, safer, and more user-friendly products, especially in the case of equipment destined for the..........",
    "options": [
      "A. work environment",
      "B. study environment",
      "C. life environment",
      "D. All of the answer"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 165
  },
  {
    "question": "In what early years did technical developments within the plastics industry produced a host of new synthetic materials, from durable, colorful polypropylene to hard, glossy acrylonitrile butadiene styrene (ABS) ?",
    "options": [
      "A. 1950s",
      "B. 1960s",
      "C. 1970s",
      "D. 1980s"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 166
  },
  {
    "question": "In 1928, the furniture and interiors designer Pierre Chareau began building the extraordinary Maison de Verre (House of Glass) in Paris. Its use of industrial materials, including steel beams, translucent glass bricks, perforated sheet metal, and rubber flooring tiles. What is the layout of the building and all its fixtures and fittings designed for?",
    "options": [
      "A. health",
      "B. hygiene",
      "C. None of the answer",
      "D. Health and hygiene"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 167
  },
  {
    "question": "Who took the most important role in building the Crystal Palace - an ingenious building design where the first Great Exhibition of all nations was took place, London, 1851?",
    "options": [
      "A. Joseph Paxton",
      "B. Henry Cole",
      "C. Owen Jones",
      "D. Ludwig Mies Van de Rode"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 168
  },
  {
    "question": "Arranging the timeline corresponding to the launch of each following invention: 1. hourglass, 2. Blast furnace, 3. Improved water wheel, 4 Johannes Gutenberg Printing Press. a. 7th century - 8th century - 12th century - 14th century b. 8th century - 7th century - 12th century - 14th century c. 8th century - 12th century - 7th century - 14th century d. 7th century - 14th century - 8th century - 12th century c Who was one of the designer that developed the very first line of inflatable furniture, the Aerospace collection, 1967?",
    "options": [
      "A. French-Vietanmese Nguyen Manh Khanh known as Quasar.",
      "B. Andy Warhol.",
      "C. Alphonse Mucha.",
      "D. Pablo Picasso."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 169
  },
  {
    "question": "During the design decade in the 1930s, what did design consultants do to increase profitability for manufacturers?",
    "options": [
      "A. Making a few seemingly insignificant changes in their redesigns. They also changed materials-say, from metal to plastic-which made products cheaper, more functional.",
      "B. Design optimized for the industrial production process. They also changed materials-say, from metal to plastic-which made products cheaper, more functional.",
      "C. Decreased functionality of the product to made products cheaper.",
      "D. Making a few seemingly insignificant changes in their redesigns and remove all decorative motifs."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 170
  },
  {
    "question": "In the late 300 BC-200 BC, humans used simple ingot molds, posed by carving them directly into stone blocks. What was the most significant in using this kind of production method?",
    "options": [
      "A. Create many products to meet the growing needs of people.",
      "B. The first time designs could be replicated more or less exactly, thereby making them easier and less time consuming to manufacture.",
      "C. The products were more durable than previous production methods.",
      "D. All of the above."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 171
  },
  {
    "question": "What is the style of the poster named \"Knigi\" was designed by Alexander Rodchenko for Gosizda in 1924?",
    "options": [
      "A. Bauhaus.",
      "B. De Sijl.",
      "C. Constructivism.",
      "D. Cubism."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 172
  },
  {
    "question": "What was the contribution of William Morris in the realm of Arts and Crafts movement?",
    "options": [
      "A. He mastered the art of woodblock printing and created some of the most recognizable textile patterns of the 19th century.",
      "B. He created products that gave meaningful and satisfying work to those who made them and joy through use to those who could afford to buy them.",
      "C. He did infuse the design with art but also to revitalize the age-old craft traditions, which were by now under severe threat from industrialization and mechanized production.",
      "D. All of the above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 173
  },
  {
    "question": "Which period of times when the \"Standardized\" method first used in mass-production?",
    "options": [
      "A. Ancient China and ancient Roman times.",
      "B. The industrial revolution in Germany.",
      "C. America.",
      "D. France."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 174
  },
  {
    "question": "AEG was a German company that exploited the commercial benefits of modern design, a pioneer of electrical domestic appliances. How could AGE distinguish its products from its competitors?",
    "options": [
      "A. Promoting their products through posters and attractive packaging.",
      "B. Good product.",
      "C. The price is cheap.",
      "D. Modern design."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 175
  },
  {
    "question": "From the 1760s to the 1780s, \"Adam style\" quickly became highly fashionable in Britain which demonstrated the height of refined taste and modernity. What were the characteristics of the \"Adam style\"?",
    "options": [
      "A. Streamline, elegant, nostalgic.",
      "B. Dramatic, rich in emotion.",
      "C. The graceful and feminine.",
      "D. Picky, florid."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 176
  },
  {
    "question": "This picture shows Early Lyre chair designed by Mark Brazier Jones, 1980. What style is it?",
    "options": [
      "A. Creative Salvage.",
      "B. Good Design.",
      "C. Radical design.",
      "D. Craft Revival."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 177
  },
  {
    "question": "Fill in the blank Fundamentally, ... was about fostering better functional, intellectual, and emotional connections between object and user through a more mindful, human-centric approach to problem-solving.",
    "options": [
      "A. Functionalism",
      "B. Modernism",
      "C. Organic design",
      "D. Minimalism"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 178
  },
  {
    "question": "In the US, during the 1920s, market saturation appeared. How did manufacturers make it easier for customers to remove old products and buy new ones?",
    "options": [
      "A. Constantly launching new products combined with headlining advertising.",
      "B. Manufacturers have constantly launched promotions.",
      "C. Support for new purchases by credit card.",
      "D. Attractive promotions."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 179
  },
  {
    "question": "What are the characteristics of Good Design?",
    "options": [
      "A. Pure forms, Practical function, appropriate use of materials.",
      "B. Restrained use of color, high-quality construction and good value for money.",
      "C. To be synonymous with good taste.",
      "D. Pure forms, practical function, appropriate use of materials, restrained use of color, high-quality construction and good value for money."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 180
  },
  {
    "question": "What are the characteristics of the Italian line?",
    "options": [
      "A. Harnessing the potential of mass production to create beautiful, useful.",
      "B. To compensated for technical deficiencies with visual charm, and helped give a product an emotionally compelling edge.",
      "C. A return to beauty based on form and not on ornamentation",
      "D. The objects tended to rely more on \"eye appeal\" than function."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 181
  },
  {
    "question": "What was the most common material used during the time of Golden Age from 1963 to 1973?",
    "options": [
      "A. Artificial plastic.",
      "B. Artificial material",
      "C. Bending wood.",
      "D. Glasses."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 182
  },
  {
    "question": "Fill in the blank ... - looked back to a classical past, it was essentially a forward-looking style that sought to reinterpret the classical rules of proportion into a graceful modern form.",
    "options": [
      "A. Renaissance",
      "B. Neoclassicism",
      "C. Gothic revival",
      "D. Modernism"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 183
  },
  {
    "question": "What is the goal of Ergonomic design?",
    "options": [
      "A. Create better products.",
      "B. Create safer products.",
      "C. Create more user-friendly products.",
      "D. All of the above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 184
  },
  {
    "question": "What kinds of tool were developed to support the construction of buildings in ancient Egypt, especially the ancient pyramids?",
    "options": [
      "A. Wheelbarrow",
      "B. Ramps and levers.",
      "C. Propeller.",
      "D. Concrete."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 185
  },
  {
    "question": "Which parts of Qin Shi Huang's Terracotta Warrior were mass-produced?",
    "options": [
      "A. Arms, body.",
      "B. Face.",
      "C. Soles.",
      "D. Head."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 186
  },
  {
    "question": "What was the first work printed on Johannes Gutenberg's printer?",
    "options": [
      "A. The Bible's Psalms in Latin.",
      "B. A German History book.",
      "C. Paleontological book.",
      "D. Bay Psalm book."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 187
  },
  {
    "question": "Who is the author of the book \"The Analysis of Beauty\" published in 1753, which led to an increasing understanding of the fundamental relationship between the purpose of an object and the way it looks, and how this knowledge should be applied to so-called \"art manufacture\"?",
    "options": [
      "A. Robert Adam.",
      "B. Michael Thonet.",
      "C. William Hogarth.",
      "D. Adolf Loos."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 188
  },
  {
    "question": "Fill in the blank \" ... was one of the earliest American manufacturers to realize fully the potential of an effective marketing program that included sales promotion, publicity, product sampling, advertising, and public relations\"; and he helped to alter significantly the course of modern industrial design toward a much more commercial modus operandi.",
    "options": [
      "A. Samuel Colt.",
      "B. Adolf Loos.",
      "C. William Morris.",
      "D. Walter Gropius."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 189
  },
  {
    "question": "Which country introduced the term Jugendstil as the meaning of \"youth style\"?",
    "options": [
      "A. Germany.",
      "B. The UK.",
      "C. America.",
      "D. France."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 190
  },
  {
    "question": "What is the De Stijl?",
    "options": [
      "A. The international phenomenon that played a key role in the story of design.",
      "B. The art and design reform movement, in that it sought divine meaning within the mysteries of the universe through the purification of form.",
      "C. The style that looked optimistically to the future rather than nostalgically to the past, using as its primary source of inspiration the visually seductive and tactile forms of the natural world.",
      "D. The style found its most sublime expression, with examples including the extraordinary Gesamtkunstwerk (meaning \"total work of art\")"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 191
  },
  {
    "question": "What is the inspiration of Memphis structure?",
    "options": [
      "A. The insect.",
      "B. The smiotics, the study of language and symbols",
      "C. The flora and fauna",
      "D. The animal."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 192
  },
  {
    "question": "What does it mean for the term \"Italian Line\"?",
    "options": [
      "A. Focus on styling rather than technology.",
      "B. Focus on technology rather than styling.",
      "C. Focus only on the function of the designs .",
      "D. Focus on the manufacture of the designs."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 193
  },
  {
    "question": "Fill in the blank \"The Der Kuss (The Kiss), a woodcut created by Peter Behrens in 1898 reflected the inherent erotic sensuality of...\".",
    "options": [
      "A. Mannerist.",
      "B. Rococo.",
      "C. Art Decor.",
      "D. Jugendstil."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 194
  },
  {
    "question": "Which building interior was described as \"the starting point for all modern interior design\"?",
    "options": [
      "A. Bruno Taut's Glass Pavilion at the Deutsche Werkbund exhibition, 1914.",
      "B. Café Museum with the nickname Café Nihilismus",
      "C. Walter Gropius and Adolf Meyer's model factory at the Deutsche Werkbund exhibition in Cologne, 1914.",
      "D. Henry van de Velde's Werkbund Theatre"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 195
  },
  {
    "question": "Fill in the blank The 1967 \"Summer of Love,\" ... revolution burst onto the streets of the Haight-Ashbury district in San Francisco, made bohemian counterculture a major international force-one that would alter, among other things, ideas about the very purpose of design.(073-356-8678)",
    "options": [
      "A. The Punk.",
      "B. The Hippie.",
      "C. The Independent Group.",
      "D. The rock and roll."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 196
  },
  {
    "question": "What are the characteristics of High Victorian style?",
    "options": [
      "A. Boasting a dramatic grid-like construction of strong vertical and horizontal elements inspired by Japanese screens.",
      "B. The designs were emblazoned with autograph-a very early example of an artistic signature used to sell a designed product.",
      "C. Harnessing the potential of mass production to create beautiful, useful",
      "D. Heavy ornamentation was, for the most part, the order of the day, especially in goods destined for the consumer market."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 197
  },
  {
    "question": "What are the principles of timeless beauty established by William Hogarth? Check two options.",
    "options": [
      "A. In relation to designing practice, the notions of fitness - \"the first fundamental law in nature with regard to beauty\".",
      "B. Simplicity is the most important.",
      "C. The proportion \"a just symmetry and harmony of parts with respect to the whole\".",
      "D. Beauty comes from the harmonious ratio of measurements."
    ],
    "answer": [
      "A",
      "C"
    ],
    "multiAnswer": true,
    "id": 198
  },
  {
    "question": "Which manufacturer pioneered the mass production of consumer goods, invented the first railroad tracks for railroads, the first iron boat and the first iron bridge during the Industrial Revolution?",
    "options": [
      "A. Coalbrookdale.",
      "B. Portsmouth Block Mills.",
      "C. Wedgwood.",
      "D. Whitneyville."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 199
  },
  {
    "question": "Which designer chose to use the poppy as a recurring motif in Art Nouveau graphic design?",
    "options": [
      "A. René Lalique.",
      "B. Alphonse Mucha.",
      "C. Antoni Gaudí.",
      "D. Hector Guimard."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 200
  },
  {
    "question": "In design, what does Gesamtkunstwerk mean?",
    "options": [
      "A. Total work of art.",
      "B. The simplicity and functionality as the most important aspects of life-enhancing design.",
      "C. The use of strong vertical and horizontal lines and plain, often unadorned surfaces.",
      "D. Restore building, decoration, glass-painting, pottery, wood-carving and metal to their rightful places beside painting and sculpture."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 201
  },
  {
    "question": "What are the characteristics of the Aesthetic Movement? Check two options.",
    "options": [
      "A. Essentially a cult of beauty, it was culturally aspirational and international.",
      "B. Function and underlying symbolism.",
      "C. Design optimized for industrial production process.",
      "D. Remove all decorative motifs."
    ],
    "answer": [
      "A",
      "B"
    ],
    "multiAnswer": true,
    "id": 202
  },
  {
    "question": "Why did plastic become the design material that designers liked most from 1963 to 1973?",
    "options": [
      "A. Plastics democraticized avant-garde design, making it so affordable that for the first time in history it became part of the mass market.",
      "B. Plastic is a limited material in color, but it is cheap, easy to mass produce, it becomes part of the mass market.",
      "C. Plastic is a relatively expensive material but is easy to manufacture according to the standard process, so the product is affordable, it becomes part of the mass market.",
      "D. Plastic is a relatively inexpensive but colorful material that attracts young people, so it easily sells to the market at a high price, with great profits."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 203
  },
  {
    "question": "In 1873 the Remington factory produced the world's first commercial machines, which was designed by Christopher Latham Sholes and introduced the qwerty keyboard layout that is still in use today. What is the product?",
    "options": [
      "A. Selectric electric typewiter.",
      "B. Typewriter.",
      "C. Printing presses.",
      "D. Apple Macintosh."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 204
  },
  {
    "question": "Who created the icons of Mac's revolutionary graphical interface such as the trashcan, the bomb, the smiling monitor?",
    "options": [
      "A. Susan Kare.",
      "B. Rudy VanderLans.",
      "C. Zuzana Licko.",
      "D. Jonathar Ive."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 205
  },
  {
    "question": "Who is generally regarded as \"The father of industrial design\"?",
    "options": [
      "A. Muthesius.",
      "B. Christopher Dresser.",
      "C. William Morris.",
      "D. A. W. N. Pugin."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 206
  },
  {
    "question": "Which factory revealed the logical division and specialization of labor which included an assembly-line type of manufacturing system in order to increase its input-output efficiency and so extracted surplus value?",
    "options": [
      "A. Wedgwood.",
      "B. Danhauser furniture.",
      "C. I. M. Singer & Co.",
      "D. Darby's Coalbrookdale."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 207
  },
  {
    "question": "Who made the following statement? \"There must be a new approach that was more scientific than artistic approach and that identified the most logical forms, materials and manufacturing processes with which to realize designs that could be produced entirely by machine.\"",
    "options": [
      "A. Adolf Loos",
      "B. William Hogarth",
      "C. Henry Cole",
      "D. Michael Thonet"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 208
  },
  {
    "question": "Fill in the blank:Adolf Loos argued that the ornament accelerated the aesthetic development, but in economic respects it is a crime, in that it leads to the waste of ..................: wasted capital.",
    "options": [
      "A. Human labor",
      "B. Money",
      "C. Materials",
      "D. All of the answer"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 209
  },
  {
    "question": "Which German company pioneered the electrical-transmission system and was an early manufacturer of electric domestic appliances?",
    "options": [
      "A. Allgemeine Elektricitäts-Gesellschaft (AEG)",
      "B. Edison General Electric Company",
      "C. Workshop for Precision Mechanics and Electrical Enginerring",
      "D. None of the answer."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 210
  },
  {
    "question": "Fill in the blank: The numerous products Behrens designed for AEG incorporating.........parts that were often interchangeable between product; this rationalized production methods and optimized economic efficiency.",
    "options": [
      "A. Standardized",
      "B. Mass production",
      "C. Luxury materials",
      "D. Craftsmanship"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 211
  },
  {
    "question": "In 1879, which product unleashed a new electric age across the world?",
    "options": [
      "A. Wireless telegraph",
      "B. Improved carbon-button telephone transmitter",
      "C. Phonograph",
      "D. Incandescent electric lightbulb"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 212
  },
  {
    "question": "(Kiểu hỏi khác: Which invention by Thomas Edison transformed the world by turning night into day? -> Electric lightbulb) Fill in the blank: Orville and Wilbur Wright's first successful airplane flight in....... inaugurated a new epoch of air travel-and with it, globalization.",
    "options": [
      "A. 1902",
      "B. 1903",
      "C. 1905",
      "D. 1909"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 213
  },
  {
    "question": "Fill in the blank:Henry Ford established the world's first factory moving-assembly line in 1913. It brilliantly used pulleys and conveyors to apply the power of electricity to established armory. The assembly time of a Model T car's chassis was reduced from ...... hours in October 1913 to .......... minutes the following year",
    "options": [
      "A. nine and a half ...... ninety-three",
      "B. twelve and a half ...... ninety",
      "C. twelve ...... ninety-three",
      "D. twelve and a half...... ninety-three"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 214
  },
  {
    "question": "What were the first military designs that appeared during World War I?",
    "options": [
      "A. chemical weapons such as mustard gas,",
      "B. biplanes used for bombing",
      "C. aerial reconnaissance, submarines, and tanks",
      "D. All of the answer."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 215
  },
  {
    "question": "What is the purpose of the Deutscher Werkbund?",
    "options": [
      "A. Bring art to industry and industry to art.",
      "B. Bring art to industry",
      "C. Bring industry to art.",
      "D. None of the answer"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 216
  },
  {
    "question": "In the end of 1885, who patented the four-wheeled automobile?",
    "options": [
      "A. Gottlieb Daimler",
      "B. Wilhelm Maybach",
      "C. Henry Ford",
      "D. Werner von Siemens"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 217
  },
  {
    "question": "Fill in the blank: During the 1910s, members of the Russian avant-garde were influenced by the abstraction of French .......as well as by the dynamic forcefulness of Italian .................and its glorification of the machine. The war forced many Russian artists to return home, where, culturally isolated by the conflict, they went on to form their own movement in fine art, architecture, and design, which was based on non-figurative representation and geometric abstraction.",
    "options": [
      "A. Art Nouveau - Futurism",
      "B. Cubism - Futurism",
      "C. Art Nouveau - Italian Line",
      "D. Cubism - Italian Line"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 218
  },
  {
    "question": "What is the name of the school founded by Constructivists in Moscow in 1920?",
    "options": [
      "A. Bauhaus Weimar",
      "B. Bauhaus Dessau",
      "C. Deutscher Werkbund",
      "D. Vkhutemas"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 219
  },
  {
    "question": "Fill in the blank: Gropius now believed that the industrial capitalism pioneered by ...............could actually benefit workers, and that it was the only approach that might ensure the Bauhaus's economic survival.",
    "options": [
      "A. Ludwig Mies van der Rodhe in the United States",
      "B. Hannes Meyer in Switzerland",
      "C. Henry Ford in the United States",
      "D. Thomas Edison in the United States"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 220
  },
  {
    "question": "A What graphic design style is innovative in its use of collage that incorporated striking black-and-white photographs taken from unconventional angles?",
    "options": [
      "A. Constructivist",
      "B. De Stijl",
      "C. Art Deco",
      "D. Art Nouveau"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 221
  },
  {
    "question": "Fill in the blank Bauhaus School was established by Walter Gropius (1883-1969) in Weimar, Germany. The Bauhaus, meaning \"Building house\", sought to reform the teaching of the various creative disciplines and thereby bring an unprecedented ..........to the arts.",
    "options": [
      "A. unity",
      "B. uniqueness",
      "C. novelty",
      "D. grandeur"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 222
  },
  {
    "question": "Which school has been a powerful modernizing force: it transformed design education and thereby profoundly influenced the story of design?",
    "options": [
      "A. Vkhutemas",
      "B. Bauhaus",
      "C. Staatliche Akademie der Bildenden Künste Stuttgart",
      "D. Ludwig Maximilian"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 223
  },
  {
    "question": "Fill in the blank: The .......... designers such as Fortunato Depero used fragmented cubistic forms as a means of evoking acceleration and speed.",
    "options": [
      "A. Futurist",
      "B. Art Deco",
      "C. Bauhaus",
      "D. Rococo"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 224
  },
  {
    "question": "Fill in the blank: Postwar modernism was markedly different from: materials and technologies, more emotionally engaging language of organic form. This freer interpretation of modernism, which became known as............., more aligned to movements within contemporary fine art. a. Organic design b. Anthropometric Design c. Italian design d. Good design a In 1958, General Motors produced a short documentary, American Look. What was the film intended to honor?",
    "options": [
      "A. American manufacturers",
      "B. Stylists of America",
      "C. America's wealthy clients",
      "D. Collaboration between American designers and manufacturers"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 225
  },
  {
    "question": "During the early 1950s, a host of Italian products exemplified contemporary, fashionable look. What products are those?",
    "options": [
      "A. Corradino D'Ascanio's Vespa 125 motor scooter (1951)",
      "B. Arcello Nizzoli's Lettera 22 typewriter (1950) 1957)",
      "C. None of the answer",
      "D. Corradino D'Ascanio's Vespa 125 motor scooter (1951) and Arcello Nizzoli's Lettera 22 typewriter (1950) 1957)"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 226
  },
  {
    "question": "Fill in the blank: In 1960s, plastics democratized avant-garde design, making it so affordable that for the first time in history it became part of the ..........",
    "options": [
      "A. mass market.",
      "B. industrial production",
      "C. industrial design",
      "D. All of the answer"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 227
  },
  {
    "question": "Fill in the blank: The origins of Pop as a cultural phenomenon can be traced to the formation of the ...............Group in London in 1952, to examine the technical achievements of American industrial production and its by-product, popular consumerist culture.",
    "options": [
      "A. Peace",
      "B. Independent",
      "C. Democratic",
      "D. Fine Arts Academy"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 228
  },
  {
    "question": "Fill in the blank: Most of the designs emerging from Italy during the Pop era, which spanned a period of roughly ten years between 1963 and 1973, were highly futuristic, and were directly inspired by the age's cultural fixation on space travel and ..........research.",
    "options": [
      "A. sun",
      "B. lunar",
      "C. Mars",
      "D. Venus"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 229
  },
  {
    "question": "In what year did Sony launch the first recorder, or VCR (a videocassette recorder)?",
    "options": [
      "A. 1970",
      "B. 1971",
      "C. 1972",
      "D. 1975"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 230
  },
  {
    "question": "Which video game by US game developer Atari has opened up a whole new set of design efforts and spawned an industry, will compete with the old entertainment markets for movies and TV?",
    "options": [
      "A. Pong",
      "B. Space Invaders",
      "C. All of the answer",
      "D. None of the answer"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 231
  },
  {
    "question": "Fill the blank The shrinking of the world through the increasingly global reach of the media-catalyzed by the launches of CNN and MTV in............. This cross-pollination of ideas contributed to a growing understanding and acceptance of postmodernism throughout the international design community.",
    "options": [
      "A. 1970 and 1981",
      "B. 1980 and 1985",
      "C. 1980 and 1981",
      "D. 1960 and 1961"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 232
  },
  {
    "question": "Creative Salvage had an anarchic aesthetic and an anti-mainstream agenda. What is the key to Creative Salvage success?",
    "options": [
      "A. The recycling of scrap to form stylish and functional artifacts for the home and office.",
      "B. The use of expensive materials to form stylish and functional artifacts for the home and office.",
      "C. The use of plastic raw materials to form stylish and functional artifacts for the home and office.",
      "D. The emphasis on design to form stylish and functional artifacts for the home and office."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 233
  },
  {
    "question": "Fill in the blank: The icons of the Mac's revolutionary graphical interface-............., and so on-were devised by one of the great unsung design heroes of the computer revolution, Susan Kare.",
    "options": [
      "A. the trashcan",
      "B. the bomb",
      "C. the smiling monitor",
      "D. All of the answer"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 234
  },
  {
    "question": "In 1980s, which device began to replace designers' and engineers' centuries-old drafting and modeling with two-dimensional, vector-based drafting systems and three-dimensional solid- and surface-modeling software programs?",
    "options": [
      "A. typewriter",
      "B. laptop",
      "C. iPad",
      "D. personal computer"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 235
  },
  {
    "question": "In 1982, who launched a large-format graphic magazine, Emigre, which disseminated the ideas behind this new movement in graphic design to a much wider international audience?",
    "options": [
      "A. Rudy VanderLans",
      "B. Zuzana Licko",
      "C. None of the answer",
      "D. Rudy VanderLans and Zuzana Licko"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 236
  },
  {
    "question": "Whose hypertext system allowed different operating systems to run across the Internet, which gave rise to the World Wide Web?",
    "options": [
      "A. Rudy VanderLans",
      "B. Zuzana Licko",
      "C. None of the answer",
      "D. Tim Berners-Lee"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 237
  },
  {
    "question": "In 1989, which British computer scientist - created a new computer language-Hypertext Transfer Protocol (HTTP)-that enabled documents to be communicated over the Internet?",
    "options": [
      "A. Rudy VanderLans",
      "B. Zuzana Licko",
      "C. Tim Berners-Lee",
      "D. None of the answer"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 238
  },
  {
    "question": "Fill in the blank: During the mid-2000s laser stereolithography, now better known as .......... essentially grew prototypes in layers from vats of liquid photopolymer resin that was cured using ultraviolet beams of light.(073-356-8678)",
    "options": [
      "A. Wall mural printer",
      "B. Digital printer",
      "C. Laser printers",
      "D. 3D printing"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 239
  },
  {
    "question": "Who pioneered the \"design botany\" of the 19th century?",
    "options": [
      "A. Christopher Dresser",
      "B. Marc Newson",
      "C. Bouroullec brothers",
      "D. Henry Cole"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 240
  },
  {
    "question": "What kind of technique that represented for the first-time designs could be replicated more or less exactly, thereby making them easier and less-time consuming to manufacture?",
    "options": [
      "A. Paddle-and-anvil method",
      "B. Simple ingot molds",
      "C. Standardization",
      "D. Interchangeability"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 241
  },
  {
    "question": "What designs could be viewed as an early example of design being used as metaphor, or an authoritative symbol, not only of the emperor's domination but also of the empire's might power? a. The Roman oil lamps b. The Roman Amphora c. The Roman coins with the image of Caesar d. The Roman Gladius sword c What were the groundbreaking inventions designed or refined during the Middle Ages or medieval period that irrevocably changed the course of human history? a. Water wheel b. Mechanical clock c. Blast furnace d. Both of them d The expansion of trade and its ensuing commercial opportunities created an increasingly competitive marketplace in which technological advancement was necessary in order to keep up with growing demand. How can medieval Craftsmen protect their interests? a. The formation of craft guilds b. Intellectual property c. Law d. Both of them a What was the most significant invention to be deigned during the Renaissance that led to the mass production of books, enabling thoughts and ideas to be disseminated widely for the first time in history? a. Johannes Gutenberg's printing press b. The Remington Typewriter c. The Computer d. Both of them a During the eighteenth century, a well-known Scottish architect developed his own approach to Neoclassic by rejecting the robust neo-Palladianism and promoted a more delicate style that was based on the studies of surviving examples of actual Greek architecture. Who is he? a. Thomas Chippendale b. Jean-Francois Leleu c. Thomas Sheraton d. Robert Adam d By the eighteenth century, what kind of program had become a de rigueur rite of passage that helped to promote the belief that a fundamental understanding of design both past and present was a necessary aspect of a young gentlemen's fully rounded education? a. Grand Tour b. The British social agenda c. The Marshall plan d. The Paris Exposition a Who was one of the great pioneers of industrialized manufacturing understood the commercial necessity of being constantly à la mode and was one of the very first manufacturers to have the cultural wherewithal to employ some of the period's best artists and craftsmen to create designs for industrial production?",
    "options": [
      "A. Sir Samuel Bentham",
      "B. Josiah Wedgwood",
      "C. Thomas Hope",
      "D. Michael Thonet"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 242
  },
  {
    "question": "During the 17th and 18th centuries an intellectually led secularism arose, bringing about a new forward-looking, cultural movement. It not only challenged age-old religious dogma but also promoted scientific knowledge and, accordingly industrial progress. What is the name of this movement? a. Arts and Crafts movement b. The Enlightenment c. Aesthetic movement d. The New art b Which class benefited the most from the first industrial revolution whose found prosperity in the growing cities through a mercantile endeavor or civil services, or by being engaged in a profession, such as medicine and law? a. The Upper Class b. The Middle Class c. The Lower Class d. The Royal Class b Aesthetic movement was a branch of design reform that stemmed from the Gothic revival and the Pre-Raphaelite Brotherhood which was spurred on the idea of \"art for art sake\" rather than \"craft for craft sake\", and also looked further afield for decidedly more exotic inspirations instead of looking for to national vernacular precedents for design archetypes. Which was the country that influenced the most for the Aesthetes and gave the British designers, artist and architects the first taste of a design culture that had evolved along very different lines from those in Europe? a. China b. Arabic c. Turkey d. Japan d Among the Gothic Revival reformers, which of the following promoted a far more fanciful, almost fairy tale-esque interpretation of the Gothic style: his work captured the dreamlike world of the Pre-Raphaelites while also anticipating the work of the Arts and Crafts movement? a. A. W. N. Pugin b. George Edmund Street c. William Burges d. Emmanuel Viollet-le-Duc d Among the Gothic Revival reformers, which of the following was inspired by the plainer early English building of the 12th and 13th centuries that was characterized by the rudimentary and furniture design was less decoratively fussy and more modern looking, with simple, no-nonsense construction? a. A. W. N. Pugin b. George Edmund Street c. William Burges d. Emmanuel Viollet-le-Duc b In the 19th century, what design reform movement sought not only to infuse design with art but also to revitalize the age-old craft traditions, which were by now under severe threat from industrialization and mechanized production? (p.141) a. Aesthetic movement b. Arts and Crafts movement c. National Romanticism d. The New Art b During the late 1870s, which city became the creative crucible of Aesthetic movement? a. NewYork b. Paris c. London d. Milan c The arts and crafts of Japan were a revelation to European designers and artists, who found them highly refined, both technically and aesthetically, and admired the fact that even the humblest of objects harmoniously balanced from and function. Who was the first Western designer to visit Japan officially in order to study its arts and manufacturing? a. Christopher Dresser b. William Morris c. Henry Cole d. A. W. N. Pugin a Who laid the theoretical foundations for National Romanticism in the sense that the present a continuation of the past as well as a bridge to the future, and the importance of ancestry as well as the need for an identifiable sense of character within a nation's culture? a. Baruch Spinoza b. John Locke c. Johann Gottfried von Herder d. Voltaire c What was another name for the second phase of the Arts and Crafts movement in Britain?",
    "options": [
      "A. Aesthetic movement",
      "B. The New Art movement",
      "C. Modernism",
      "D. Post-modernism"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 243
  },
  {
    "question": "What was the significant difference between the second phase of the British Arts and Crafts movement and Morris's time?",
    "options": [
      "A. Ornament was integral to the overall form of the design",
      "B. Using floral patterns that swirled harmoniously across printed cottons and velvets",
      "C. Employed highly stylized floral motifs based on ancient Celtic patterns",
      "D. Harness the power of the machine, rather than to reject it"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 244
  },
  {
    "question": "What was the difference between the Arts and Crafts movement in America and Britain?",
    "options": [
      "A. American Arts and Crafts designers focused more on function than decoration",
      "B. American Arts and Crafts designers preferred to use strong vertical and horizontal lines and plain",
      "C. American Arts and Crafts designers produced work that was more muscular and elemental than that created by European exponents",
      "D. All of the above"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 245
  },
  {
    "question": "What was the approach most used by American Arts and Crafts designers in expressing the rustic, unusual style of decoration and the use of simple elemental shapes? a. Rough-and-ready approach b. Human-centered approach c. Co-design approach d. All of the above a This picture shows an image of a highly innovative chair designed by Arthur Heygate Mackmurdo for the guild's dining hall that featured a back splat incorporating an asymmetrical motif of swirling foliage stems. What style was it designed? a. Arts and Crafts movement in Britain b. Arts and Crafts movement in America c. Aesthetic movement d. Neo-classicism a This picture show an image of the first true Art Nouveau building that the interior was groundbreaking in its use of a steel-and-glass roof that bathed its stairwell core in warm, golden light and the writhing, decorative floral motifs in its staircases, which incorporated structural columns and integrated lighting fixtures to dramatic effect. Who is the author of this work?(073-356-8678) a. Hector Guimard b. Rene Lalique c. Antonio Gaudi d. Victor Horta d Driven by the tastes of the youth, manufacturers now began to produce a steady stream of inexpensive, expendable products that suited their customers' more casual lifestyles, focus on the bold patterns and shiny, brightly coloured designs. What kind of style is described above?",
    "options": [
      "A. Functionalism.",
      "B. Minimalism.",
      "C. De Stijl.",
      "D. Pop design."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 246
  },
  {
    "question": "Who was established the Staatliches Bauhaus in 1916 by merging the two Weimar art schools into a single interdisciplinary school of craft and design?",
    "options": [
      "A. Franks Lloyd Wright.",
      "B. Walter Gropius.",
      "C. Louis Sullivan.",
      "D. Michael Thonet."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 247
  },
  {
    "question": "In 1955, a highly influential book on the subject \"Designing for People\", which introduced \"Joe and Josephine\", the two diagrammatic characters based on the concept of the \"average Joe\". Who is the author of the book?",
    "options": [
      "A. Henry Dreyfuss",
      "B. Peter Behrens",
      "C. Robert Bosch",
      "D. Adolf Loos"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 248
  },
  {
    "question": "During the First Industrial Revolution, what was one of the most profound effects of these early mechanized looms?",
    "options": [
      "A. The change in working patterns, with workers, instead of individually labouring at home.",
      "B. Increase labour productivity.",
      "C. Increase the number of products.",
      "D. Reduce the cost of products."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 249
  },
  {
    "question": "Which of the following designers epitomized the French Art Nouveau style better than any other who created cast-iron entrances to the Paris Metro, designed for the Compagnie du Metropolitan in 1898, that brought him widespread acclaim?",
    "options": [
      "A. Hector Guidmard",
      "B. Emile-Jacques Ruhlmann",
      "C. Piere Chareau",
      "D. Rene Lalique"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 250
  },
  {
    "question": "What were the design trends with playful design languages attract optimism in the early 1980s?",
    "options": [
      "A. Art Deco",
      "B. Memphis",
      "C. Art Nouveau",
      "D. Pop Art."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 251
  },
  {
    "question": "How did Adolf Loos perceive the relationship between design and industrialization?",
    "options": [
      "A. He believed design should completely reject industrialization",
      "B. He advocated for a return to handcrafted methods exclusively",
      "C. He was indifferent to the impacts of industrialization on design",
      "D. He saw accepting and designing for the machine as essential for modern design"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 252
  },
  {
    "question": "During the early 1950s, a host of Italian products exemplified contemporary, fashionable look that were characterized by the use of sensuous curves and undulating forms, marking a new sculptural confidence in Italian design that reflected the influence of American streamlined \"body-shell\" shapes. What products are those?",
    "options": [
      "A. The Vespa 125 motor scooter",
      "B. The Vespa 125 motor scooter and the Arcello Nizzoli's Lettera 22 typewriter",
      "C. The Vespa 125 motor scooter; the Arcello Nizzoli's Lettera 22 typewriter, and the Lady armchair for Arflex",
      "D. None of the answer"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 253
  },
  {
    "question": "How did the Deutscher Werkbund aim to improve German design?",
    "options": [
      "A. By promoting a closer alliance between art, industry, and craftsmanship",
      "B. By focusing on the export of traditionally crafted goods",
      "C. By discouraging collaboration between artists and industrialists",
      "D. By limiting the influence of foreign designs on German products"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 254
  },
  {
    "question": "Expendability being a strong Pop theme, it is no surprise that this was the period in which inflatables became an international phenomenon in design and architecture in order to create playful pockets of air through the availability of PVC (polyvinyl chloride). Who was one of the designer that developed the very first line of inflatable furniture, the Aerospace collection, in 1967?",
    "options": [
      "A. French-Vietanmese Nguyen Manh Khanh known as Quasar.",
      "B. Andy Warhol.",
      "C. Alphonse Mucha.",
      "D. Pablo Picasso."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 255
  },
  {
    "question": "Which century saw the improvement of the water wheel, significantly impacting energy harnessing in Europe?",
    "options": [
      "A. 5th century",
      "B. 7th century",
      "C. 9th century",
      "D. 12th century"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 256
  },
  {
    "question": "The Industrial Revolution began in which country before spreading globally?",
    "options": [
      "A. France",
      "B. United States",
      "C. Germany",
      "D. Britain"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 257
  },
  {
    "question": "Who is credited with the aphorism, \"Build a better mousetrap, and the world will beat a path to your door\"?",
    "options": [
      "A. Thomas Edison",
      "B. Henry Ford",
      "C. Ralph Waldo Emerson",
      "D. Alexander Graham Bell"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 258
  },
  {
    "question": "A/B testing is a type of",
    "options": [
      "A. Online experiement",
      "B. Differential testing",
      "C. Both of the above",
      "D. None of the above"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 259
  },
  {
    "question": "The functional design of Roman amphora allowed for: ...",
    "options": [
      "A. Increased artistic expression in pottery.",
      "B. Easier shipping and transportation of liquids",
      "C. More decorative uses in Roman households.",
      "D. Standardized cooking measurements."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 260
  },
  {
    "question": "The potter's wheel, a significant advancement in pottery, was invented in: ...",
    "options": [
      "A. Greece during the Hellenistic period.",
      "B. Mesopotamia between 6,000 and 4,000 BC.",
      "C. China during the Ming Dynasty.",
      "D. Plaste Rome during the height of the Empire"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 261
  },
  {
    "question": "Which period is described as the Age of Reason, reflecting its cultural and philosophical ethos?",
    "options": [
      "A. Middle Ages",
      "B. Renaissance",
      "C. Enlightenment",
      "D. Industrial Revolution"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 262
  },
  {
    "question": "What was the term coined from the 1925 exhibition that described the style combining modern industrial design and decorative arts?",
    "options": [
      "A. Art Deco",
      "B. Bauhaus Style",
      "C. Art Nouveau",
      "D. Functionalism"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 263
  },
  {
    "question": "Which organization had a significant influence on members of the De Stijl group, particularly Piet Mondrian?",
    "options": [
      "A. The Illuminati",
      "B. Theosophical Society",
      "C. Freemasons",
      "D. Rosicrucian Order"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 264
  },
  {
    "question": "What century does Christopher Dresser belong to?",
    "options": [
      "A. 17th",
      "B. 18th",
      "C. 19th",
      "D. 20th"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 265
  },
  {
    "question": "The Roman gladius was significant because it: ....",
    "options": [
      "A. Was the first instance of a sword being used in battle.",
      "B. Was the basis for later medieval sword designs.",
      "C. Represented the peak of decorative weapon design.",
      "D. Could be mass-produced for the military."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 266
  },
  {
    "question": "What term was coined for the mechanized mass-manufacture of standardized products in America?",
    "options": [
      "A. Factory practice",
      "B. Mass production",
      "C. Armory practice",
      "D. Industrial practice"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 267
  },
  {
    "question": "What are the characteristics of Neoclassicism?",
    "options": [
      "A. Neoclassicism looked back to a classical past, sought to reinterpret the classical rules of proportion into a graceful modern form.",
      "B. The proportion \"a just symmetry and harmony of parts with respect to the whole.\"",
      "C. Ornamentation was secondary to the beauty of the form itself.",
      "D. Form of design that fosters better functional, intellectual, and emotional connections between object and user through a more mindful, human-centric approach to problem-solving."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 268
  },
  {
    "question": "What title is Christopher Dresser generally regarded as?",
    "options": [
      "A. The Father of Modern Architecture",
      "B. The Father of Industrial Design",
      "C. The Pioneer of Gothic Revival",
      "D. The Leader of the Arts and Crafts Movement"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 269
  },
  {
    "question": "What are the recognition of Good Design?",
    "options": [
      "A. Aesthetic, technical, and functional.",
      "B. Aesthetic, technical and cheap.",
      "C. Aesthetic, functional and cheap.",
      "D. Technical, functional and cheap."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 270
  },
  {
    "question": "What design styles demonstrates colours and patterns similar to those of Memphis?",
    "options": [
      "A. Minimalism.",
      "B. Functionalism.",
      "C. Pop Art.",
      "D. Art Deco."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 271
  },
  {
    "question": "What was one significant factor contributing to the United States' pivotal role in World War I?",
    "options": [
      "A. Entry into the war in 1917",
      "B. Establishment of the War Industries Board (WIB)",
      "C. Deployment of troops in 1918",
      "D. Signing of the Treaty of Versailles"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 272
  },
  {
    "question": "What was a significant consequence of the First World War on modern design?",
    "options": [
      "A. Introduction of new technologies",
      "B. Development of innovative designs",
      "C. Devastation leading to lasting legacy",
      "D. Preservation of the Belle Epoque era"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 273
  },
  {
    "question": "What were the primary factors that enabled Italian manufactures to create goods that were desired around the world and transformed the country into a major exporter and industrial power?",
    "options": [
      "A. Italy had a large number of highly specialized workshops",
      "B. The small-scale, high-quality production offered by largely family-run business",
      "C. Italy has a surfeit of highly trained architects, industrial designers, and engineers.",
      "D. All of the above"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 274
  },
  {
    "question": "Intially, Italian designers and architects focused on ... rather than on..., primarily because they did not have sufficiently advanced technology at their disposal and were therefore forced to use their imaginations, making do with the materials and low-tech production methods that were available.",
    "options": [
      "A. Function / aesthetic",
      "B. Styling / function",
      "C. Technology / aesthetic",
      "D. Styling / technology"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 275
  },
  {
    "question": "Who is the most representative designer of New Art style?",
    "options": [
      "A. London",
      "B. Gustav Stickley",
      "C. Morris",
      "D. All of them"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 276
  },
  {
    "question": "According to Hatch and Schultz, which gaps can be identified with regard to identity alignment?",
    "options": [
      "A. The vision-culture gap, the image-culture gap, and the image-vision gap",
      "B. The vision-culture gap, the image-culture gap, and the communication gap",
      "C. The vision-culture gap, the image-vision gap, and the communication gap",
      "D. None of the above"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 277
  },
  {
    "question": "What was the impact of planned obsolescence on American culture?",
    "options": [
      "A. It led to the rise of America's throwaway culture",
      "B. It made products more environmentally sustainable",
      "C. It decreased the demand for new products",
      "D. It improved the durability of consumer goods"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 278
  },
  {
    "question": "Who did General Motors chairman Alfred Sloan invite to Detroit in 1925 in order to diferentiating their products?",
    "options": [
      "A. Harley Earl",
      "B. Raymond Loewy",
      "C. Henry Dreyfuss",
      "D. None of the above"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 279
  },
  {
    "question": "What was Earl's main innovation in car design?",
    "options": [
      "A. Creating self-driving car models",
      "B. Using environmentally friendly materials",
      "C. Making car bodies more sculpturally expressive",
      "D. Developing more powerful engine systems"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 280
  },
  {
    "question": "What aesthetic principles did the De Stijl group employ across various art forms?",
    "options": [
      "A. Ornate detailing",
      "B. Curvilinear shapes",
      "C. Horizontal and vertical lines",
      "D. Random asymmetry"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 281
  },
  {
    "question": "What major event served as a catalyst for the formation of the De Stijl group?",
    "options": [
      "A. Renaissance art revival",
      "B. World War I",
      "C. The Protestant Reformation",
      "D. The Dutch Golden Age"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 282
  },
  {
    "question": "The blast furnace, developed in the 12th century, improved the smelting process by: ...",
    "options": [
      "A. Reducing impurities and producing stronger iron",
      "B. Increasing the time required to smelt iron",
      "C. Lowering the temperatures needed for smelting",
      "D. Allowing for the smelting of precious metals"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 283
  },
  {
    "question": "The blossoming of the Renaissance in the late 14th and early 15th centuries, the craft guilds played an important sociopolitical role, and consequently enhanced the livelihood of the individual designer while also ensuring a certain standard of execution.",
    "options": [
      "A. True",
      "B. False",
      "C. Not given"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 284
  },
  {
    "question": "What did Henry van de Velde emphasize in his design philosophy, as mentioned in his article \"Was ich will\" (What I want): \"No ornament can be permitted that is not organically absorbed .... I wish to replace old symbolic elements, which have lost their effectiveness for us today, with a new, imperishable beauty ... in which ornament has no life of its own but depends on the forms and lines of the object itself, from which it receives its proper organic place.\"",
    "options": [
      "A. The dominance of surface ornamentation",
      "B. The rejection of machine-made products",
      "C. The importance of organic absorption of ornament",
      "D. The separation of form and lines from ornament"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 285
  },
  {
    "question": "What role did women play in the American workforce during World War II?",
    "options": [
      "A. They continued their traditional roles without change",
      "B. They took on technical and manufacturing jobs",
      "C. They primarily worked in administrative positions",
      "D. They replaced men in all military positions"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 286
  },
  {
    "question": "What is the name of the building where the international exhibition of design took place in London in 1851?",
    "options": [
      "A. Buckingham Palace",
      "B. Royal Palace",
      "C. Louvre Museum",
      "D. Crystal Palace"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 287
  },
  {
    "question": "How did the Grand Tour impact young men of the eighteenth century, particularly those who would become patrons of the arts?",
    "options": [
      "A. It discouraged them from engaging with classical studies",
      "B. It provided them with a profound cultural education rooted in the ancient past",
      "C. It led to a rejection of classical and Neoclassical styles",
      "D. It isolated them from European artistic developments"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 288
  },
  {
    "question": "The eighteenth-century fashion for Neoclassicism and its ideals of beauty were rejected by the British artist William Hogarth in his book The Analysis of Beauty, published in 1753. In this influential book, one of the first to consider the emergence of consumer products, Hogarth laid down immutable ______ for the attainment of timeless beauty.",
    "options": [
      "A. principles",
      "B. principal",
      "C. regulations",
      "D. rules"
    ],
    "answer": [
      "A",
      "D"
    ],
    "multiAnswer": true,
    "id": 289
  },
  {
    "question": "Why was the Café Museum's interior space designed in 1899 by designer and architect Adolf Loos considered as \"the starting point for all modern interior design\"?",
    "options": [
      "A. This project introduced a new functional design spirit: furniture, lights, decorative rails show simplicity, sophistication and modernity.",
      "B. This project introduced a new interior design spirit: furniture, bar, light rails with simple design due to mass production by machine.",
      "C. This project introduced a new functional design spirit: the red-painted bentwood chairs, contrasted with space's light-green walls, which were lit by minimalist light fixtures notable for their display of bare bulbs hanging from simple brass rails.",
      "D. This project introduced a new interior design spirit: the red-painted bentwood chairs, contrasted with space's light-green walls, which were lit by minimalist light fixtures notable for their display of bare bulbs"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 290
  },
  {
    "question": "How was the quality of German-made goods often perceived during the late nineteenth century?",
    "options": [
      "A. Superior to British-made goods",
      "B. Equal to British-made goods",
      "C. Frequently inferior to British-made goods",
      "D. Unavailable in international markets"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 291
  },
  {
    "question": "It is starling that in 1960 American manufacturers were using the lion's share of the world's natural resources - some 50 percent - for the benefit of just ... of the global population. From any angle, consumerism American-style seemed unsustainable, both materially and morally.",
    "options": [
      "A. 6 percent",
      "B. 10 percent",
      "C. 20 percent",
      "D. 26 percent"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 292
  },
  {
    "question": "\"Art for art's sake\" is slogan of which movement?",
    "options": [
      "A. New Art",
      "B. Art and Crafts",
      "C. Aesthetic Movement",
      "D. Art Nouveauve"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 293
  },
  {
    "question": "(Kiểu hỏi khác: What was the design movement inspired by the idea of \"art for art's sake\" in the second half of the 19th century called?) This picture shows an image of the early version of Motorola DynaTAC mobile phone designed by Martin Cooper, c. 1973. The model was refined and, after gaining approval from the Federal Communication, finally went on sale in 1983. What is the nickname of this phone version? .",
    "options": [
      "A. Snow White's coffin",
      "B. Stone",
      "C. Brick",
      "D. None of the above"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 294
  },
  {
    "question": "What decade witnessed the first revolution in electronic manufacturing? s.",
    "options": [
      "A. 1960s",
      "B. 1970s",
      "C. 1980s",
      "D. 1990s"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 295
  },
  {
    "question": "Who was the Chinese first Emperor to focus on harnessing the power of mass-production?",
    "options": [
      "A. Qin Shi Huang.",
      "B. Kangxi.",
      "C. Han Wudi.",
      "D. Qianlong."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 296
  },
  {
    "question": "What was the primary benefit of using designed fitted garments made from animal skins?",
    "options": [
      "A. Improved decorative appeal",
      "B. Allowed storage of tools and food",
      "C. Enhanced social status within their group",
      "D. Better freedom of movement and warmth"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 297
  },
  {
    "question": "What distinguishes the Modernism movement from Art Deco?",
    "options": [
      "A. Modernism uses complex patterns, while Art Deco focuses on simplicity.",
      "B. Modernism uses classical materials, while Art Deco uses modern materials like steel and glass.",
      "C. Modernism focuses on functionality and minimalism, while Art Deco focuses on complex decoration and luxury.",
      "D. Modernism always includes strong decorative details, while Art Deco has no decorative elements."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 298
  },
  {
    "question": "What was Ludwig Mies van der Rohe's famous dictum that summarized his minimalist approach to modern design?",
    "options": [
      "A. Form follows function",
      "B. Ornament is crime",
      "C. Less is more",
      "D. Both of the above"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 299
  },
  {
    "question": "What key lesson did Colt learn from his first government contract?",
    "options": [
      "A. Substandard guns rejected by the government could be sold to the public at higher prices.",
      "B. Government contracts ensured higher profits than public sales.",
      "C. Interchangeable parts were unnecessary for successful firearm production.",
      "D. Hand labor was more reliable than machine-based production."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 300
  },
  {
    "question": "How was the emergence of modern industrial design in Britain during the 1930s driven by economic conditions?",
    "options": [
      "A. Economic boom encouraged investment in the arts",
      "B. Economic depression created a demand for low-cost, efficient product design",
      "C. The government increased spending on culture and the arts",
      "D. Profits from the U.S. stock market funded art projects"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 301
  },
  {
    "question": "What was the primary stylistic focus of the Art Deco movement during its peak in the early 1920s?",
    "options": [
      "A. Minimalism and functionality",
      "B. Luxury and opulence",
      "C. Social reform and utilitarian design",
      "D. Simplicity and geometric shapes"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 302
  },
  {
    "question": "During the 1950s, the postwar modernism was less ideologically driven and more aligned to movements within contemporary fine art. It was informed by ergonomics and influenced by the gentler Scandinavian approach to modernism, as typified by Alva Alto's pioneering work in the 1930s, and offered a more holistic understanding of what constituted Good Design. What is the specific name of this postwar modernism?",
    "options": [
      "A. Pop design",
      "B. Memphis style",
      "C. High-tech style",
      "D. Organic design"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 303
  },
  {
    "question": "What was a key feature of Art Nouveau design that differentiated it from previous styles?",
    "options": [
      "A. Use of geometric shapes",
      "B. Emphasis on historical forms",
      "C. Incorporation of natural forms",
      "D. Preference for monochromatic color schemes"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 304
  },
  {
    "question": "The Italian Radical Design movement, which had emerged during the late ... and now had a lot more to rail against, in the midst of such banality in mass-produced objects.",
    "options": [
      "A. 1950s",
      "B. 1960s",
      "C. 1970s",
      "D. 1980s"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 305
  },
  {
    "question": "What was the original name of the institution that later became known as the Bauhaus?",
    "options": [
      "A. GroBherzoglich-Sachsische Kunstgewerbeschule Weimar",
      "B. Hochschule fũr bildende Kũnste",
      "C. Deutscher Werkbund",
      "D. Staatliches Bauhaus"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 306
  },
  {
    "question": "Which fields did the Art Nouveau movement mainly influence?",
    "options": [
      "A. Architecture, graphic design, interior design, decorative arts",
      "B. Sculpture and painting",
      "C. Music and cinema",
      "D. Fashion and photography"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 307
  },
  {
    "question": "A According to Christine Frederick, why should goods not be consumed up to their last ounce of usability?",
    "options": [
      "A. To reduce waste and promote recycling",
      "B. To ensure goods are used efficiently",
      "C. To increase general income and economic growth",
      "D. To save on production costs"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 308
  },
  {
    "question": "How were guns made before Eli Whitney's innovation?",
    "options": [
      "A. With 3D printers.",
      "B. Individually and mostly by hand.",
      "C. Using a high-tech robotic arm.",
      "D. Magically, by incantation."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 309
  },
  {
    "question": "What made the M1 Garand one of the most important weapons for the U.S. military during World War II?",
    "options": [
      "A. It could fire continuously without reloading.",
      "B. It was the first semi-automatic rifle used in combat.",
      "C. It could pierce armor plating.",
      "D. It had high accuracy at long distances."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 310
  },
  {
    "question": "What was the main purpose of the Grand Tour popular among young gentle men in the eighteenth century?",
    "options": [
      "A. To explore new trade routes",
      "B. To gain a cultural education in the ancient past",
      "C. To recruit artists and designers",
      "D. To establish political connections"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 311
  },
  {
    "question": "In Norway, National Romanticism as a definable Nordic style emerged around the 1840s and found expression not only in the musical composition of Edvard Grieg but also in the buildings, furniture and silverware. What motifs were most commonly used to interpret the curious medievalized Viking-revival style?",
    "options": [
      "A. Dragon",
      "B. Dragonfly",
      "C. Wild flowers and insects",
      "D. Sea anemones"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 312
  },
  {
    "question": "What event provided the greatest impetus for the formation of the De Stijl group?",
    "options": [
      "A. The Protestant Reformation",
      "B. The Industrial Revolution",
      "C. World War I",
      "D. The Enlightenment"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 313
  },
  {
    "question": "What is the guiding principle of Art and Craft?",
    "options": [
      "A. Horror art",
      "B. Defamation of art",
      "C. Give up art",
      "D. All is incorrect"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 314
  },
  {
    "question": "Under what pseudonym did Henry Cole work when he designed a tea service that won a silver medal?",
    "options": [
      "A. Felix Summerly",
      "B. George Munday",
      "C. James Hargreaves",
      "D. Joseph Paxton"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 315
  },
  {
    "question": "This picture shows an image of LCW chair - a landmark series of compound molded-plywood chair designed for Herman Miller, 1945, 1945, which was one of the first American designs to make waves on the postwar international design scene. Who was the author of this work?",
    "options": [
      "A. Edgar Kaufmann",
      "B. George Nelson",
      "C. Eero Saarinen",
      "D. Charles and Ray Eames"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 316
  },
  {
    "question": "What advantage did Qin's bronze swords provide his soldiers?",
    "options": [
      "A. Increased durability and resistance to damage.",
      "B. A reach and cutting power 30 percent greater than earlier swords.",
      "C. The ability to be easily replaced after battle.",
      "D. A lighter weight for faster movement in combat."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 317
  },
  {
    "question": "What change in design did the Modern Style reflect during the Great Depression?",
    "options": [
      "A. From modern design to classical design.",
      "B. From cost-efficiency to luxury.",
      "C. From complex decorative design to simplicity and cost-efficiency.",
      "D. From minimalism to complex details."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 318
  },
  {
    "question": "Another expression of postmodernism that emerged in London during the early 1980s, and that was far more rough-and-ready than the beautiful crafted work produced by Memphis and Alessi and the ethereal designs of Shiro Kuramata, was the ..",
    "options": [
      "A. Pop design",
      "B. Scandinavian design",
      "C. Creative Salvage movement",
      "D. Art and Craft movement"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 319
  },
  {
    "question": "The Moderne Style movement is a continuation of which art movement?",
    "options": [
      "A. Art Nouveau",
      "B. Art Deco",
      "C. Impressionism",
      "D. Bauhaus"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 320
  },
  {
    "question": "Which landmark invention is attributed to Thomas Edison during his inventive period at Menlo Park laboratories?",
    "options": [
      "A. The first airplane",
      "B. The development of early computers",
      "C. The creation of the telephone",
      "D. The invention of the incandescent electric lightbulb."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 321
  },
  {
    "question": "The rise of personal computer, especially the Apple Mac, also spurred a momentous shift to digital in....",
    "options": [
      "A. Industrial Design",
      "B. Fashion Design",
      "C. Interior Design",
      "D. Graphic Design"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 322
  },
  {
    "question": "As a writer, you might approach your project in a different order to____",
    "options": [
      "A. Develop a story",
      "B. Develop a story world that supports this story and many more (e.g. expand the characters, locations, time periods and other attributes)",
      "C. Decide which formats could communicate the stories and the story world.",
      "D. All the above mentioned"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 323
  },
  {
    "question": "As one of the birthplaces of the Industrial Revolution, the Coalbrookdale foundry not only manufactured the first iron capable of being cast into cooking pots but also went on to produce a number of other industrial firsts. These included ___.",
    "options": [
      "A. the first iron rails for railways",
      "B. the first iron boat",
      "C. the first iron bridge",
      "D. the first iron cooking pot"
    ],
    "answer": [
      "A",
      "B",
      "C"
    ],
    "multiAnswer": true,
    "id": 324
  },
  {
    "question": "The New Art and Crafts movement in Britain does that period belong to?",
    "options": [
      "A. The Rococo",
      "B. The New Art",
      "C. The Art Nouveau",
      "D. All is incorrect"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 325
  },
  {
    "question": "Which of the following architects is considered a pioneer of the Art Nouveau movement in Belgium?",
    "options": [
      "A. Antoni Gaudi",
      "B. Alphonse Mucha",
      "C. Henry Van de Velde",
      "D. Victor Horta"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 326
  },
  {
    "question": "As Cole correctly identified, the problem was that many manufacturers saw design as the ....... rather than as an intergral part of it conception, planning, and realization.",
    "options": [
      "A. Material",
      "B. Form",
      "C. Decoration",
      "D. Production techniques"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 327
  },
  {
    "question": "What was the significance of Thomas Chippendale's book The Gentle man and Cabinet-Maker's Director?",
    "options": [
      "A. It was a guide for creating Baroque-style furniture.",
      "B. It was a catalogue to promote Chippendale's furniture and inspire other cabinetmakers.",
      "C. It rejected all traditional furniture styles in favor of modern minimalism.",
      "D. It focused exclusively on Gothic and medieval furniture designs."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 328
  },
  {
    "question": "What was Henry Ford's approach to creating success in mass production of cars?",
    "options": [
      "A. involved elaborate planning",
      "B. meticulous design",
      "C. standardization of components",
      "D. All of the answers"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 329
  },
  {
    "question": "During the postwar, Italian designers and architects focused on styling rather than technological innovation. Through this reliance on styling was born the \"Italian Line\". What is the similar design approach also used to enhance product's visual appeal?",
    "options": [
      "A. Bauhaus",
      "B. American streamlining",
      "C. Hands-on approach",
      "D. Art and Craft"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 330
  },
  {
    "question": "What material did Harley Earl use for modeling and styling which become standard practice among car manufactures, and was then taken up by other industries?",
    "options": [
      "A. Metal",
      "B. Clay",
      "C. Plastic",
      "D. Fiber Carbon"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 331
  },
  {
    "question": "What term did Piet Mondrian use to describe the De Stijl group's abstraction of form?",
    "options": [
      "A. Neoclassicism",
      "B. Neoplasticism",
      "C. Romanticism",
      "D. Impressionism"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 332
  },
  {
    "question": "The hourglass, introduced in the 8th century, was significant because it was the first: ...",
    "options": [
      "A. Tool to measure time accurately",
      "B. Tool to use sand as a measurement medium",
      "C. Dependable and reusable measurer of time",
      "D. All of the above"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 333
  },
  {
    "question": "What was the name of the German art movement from the 1890s that focused on nature and scientific ideas?",
    "options": [
      "A. Art Deco",
      "B. Jugendstil",
      "C. Bauhaus",
      "D. Baroque"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 334
  },
  {
    "question": "Which answer is the most correct when referring to Octopus Rococo?",
    "options": [
      "A. Geometrically stylized plant motifs and splashy forms were used by Swiss-German designer and sculptor Hermann Obrist, who had previously studied botany.",
      "B. The swirling vegetal motifs and whiplash forms employed by the Swiss-born German sculptor and designer Hermann Obrist, who had himself formerly studied botany.",
      "C. The vegetal motifs and whiplash forms employed by the Swiss-bor German sculptor and designer Hermann Obrist, who had himself formerly studied botany.",
      "D. None of these answers."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 335
  },
  {
    "question": "What is the significance of the Crystal Palace exhibition in London 1851 ?",
    "options": [
      "A. Encouraging an artistic movement in design across the UK",
      "B. Encourage artistic movements in design throughout Europe",
      "C. Encouraging art movements in design globally",
      "D. Resist the design movement"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 336
  },
  {
    "question": "What were the two great materials of the Industrial Revolution?",
    "options": [
      "A. iron and steel",
      "B. copper and steel",
      "C. copper and iron",
      "D. copper and charcoal"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 337
  },
  {
    "question": "How did Adolf Loos's views on design for industry differ from the traditional German approach of the time?",
    "options": [
      "A. He believed in maintaining a strong focus on handcrafted goods",
      "B. He was indifferent to the industrial changes occurring",
      "C. He advocated for more decorative elements in industrial products",
      "D. He promoted a rational, standardized approach suitable for mass production"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 338
  },
  {
    "question": "There are three key designs expressed the cultural changes afoot in the 1960s and early 1970s better than any others. What are they?",
    "options": [
      "A. The Ford Mustang fastback (1965). the Boeing 747 Jetliner (1969). the System/360 computer (IBM, 1964)",
      "B. Morris \"Mini\" Mark I (1959). \"Huey\" helicopter (1956). Eliot Noyes's IBM Electric typewriter (1961)",
      "C. Morris \"Mini\" Mark | (1959). the Boeing 747 Jetliner (1969). the System/360 computer (IBM. 1964)",
      "D. None of the above"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 339
  },
  {
    "question": "In late 19th century, which economy dominated the world?",
    "options": [
      "A. American",
      "B. Japan",
      "C. France",
      "D. Britain"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 340
  },
  {
    "question": "During the 1970s, there was an emerge of the movement that the antithesis of the High-Tech style by enabled practitioners to reengage with the hands-on process of making, and to make that process a form of creative expression. What is the name of the movement?",
    "options": [
      "A. Creative salvage movement",
      "B. Craft Revival movement",
      "C. Gothic Revival movement",
      "D. Radical design movement"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 341
  },
  {
    "question": "In 1970s, radical culture was also stirring in Britain, where the deep recession and high unemployment of the period produced a disenfranchised generation that was deeply skeptical of the establishment. What style was the natural expression of this disaffection, emerging in fashion and music around 1974 and soon making leap to graphic and product design?",
    "options": [
      "A. Punk.",
      "B. Memphis.",
      "C. Pop art.",
      "D. Retro."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 342
  },
  {
    "question": "During the Bronze Age, the introduction of molding technology allowed:",
    "options": [
      "A. A decrease in the quality of metal goods.",
      "B. Precise replication of stone tools.",
      "C. The creation of softer, more malleable metal tools.",
      "D. For the first time, designs to be replicated exactly"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 343
  },
  {
    "question": "American culture was now heavily driven by mass consumption. One of the greatest symbols of American's new culture and its industrial ascendancy was General Motors (GM), which during the 1050s became the first corporation ever to gross a billion dollars a year. Who was the design leadership of the company?",
    "options": [
      "A. Sergio Scaglietii",
      "B. Dante Giacosa",
      "C. Harley Earl",
      "D. Jan Wilsgaard"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 344
  },
  {
    "question": "What problem did Whitney aim to solve with the mechanized production of muskets?",
    "options": [
      "A. Lack of skilled labor for making fireams",
      "B. The difficulty of replacing non-standardized musket parts",
      "C. The inefficiency of hand-loading muskets",
      "D. The need for lighter and smaller firearms"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 345
  },
  {
    "question": "This picture shows an image of the Mitre armchair designed by John Makepeace. What is the style of this work? .",
    "options": [
      "A. Art and Craft movement",
      "C. Pop design",
      "B. Creative salvage movement",
      "D. Craft revival"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 346
  },
  {
    "question": "What tools were developed during the Stone Age to improve fishing?",
    "options": [
      "A. Harpoons and hooks",
      "B. Nets and traps",
      "C. Axes and knives",
      "D. Spears and bows"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 347
  },
  {
    "question": "Henry Ford is famous for which statement about car color?",
    "options": [
      "A. Color doesn't matter",
      "B. All colors are beautiful",
      "C. As long as the car runs well",
      "D. Any customer can have a car painted any color that he wants, so long as it is black"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 348
  },
  {
    "question": "The following questions are based on the Tesla Motors Case Study that you have studied in the course A customer is hesitant to buy a Tesla Model X due to concerns about charging station availability. How should Tesla's marketing team address this concern?",
    "options": [
      "A. Offer a free gas-powered backup generator with every purchase",
      "B. Emphasize Tesla's expanding Supercharger network and charging speed advantages",
      "C. Focus on other product features and avoid discussing charging issues",
      "D. None of theme"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 349
  },
  {
    "question": "Who was a primary exponent of Art Nouveau in Belgium during the 1890s and later became a key figure in the formation of the Modern Movement in Germany?",
    "options": [
      "A. Victor Horta",
      "B. Paul Hankar",
      "C. Christopher Dresser",
      "D. Henry van de Velde"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 350
  },
  {
    "question": "What was the Werkbund's impact on design standards in Germany?",
    "options": [
      "A. It focused on traditional design principles.",
      "B. It discouraged industrial production.",
      "C. By focusing the minds of industrialists on good design as a means of winning new markets",
      "D. It advocated for the exclusive contribution of individual creative endeavors to design."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 351
  },
  {
    "question": "Who does the image in the \"We Can Do It!\" poster represent?",
    "options": [
      "A. A woman taking care of her family during the war.",
      "C. A female spy during the war.",
      "B. A female worker in a factory.",
      "D. A female soldier on the battlefield."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 352
  },
  {
    "question": "This picture shows an image of the Miss Blanche chair designed by Shiro Kuramata for the Ishimaru Company, 1988. What is the style of this work?",
    "options": [
      "A. Modernism",
      "C. Post-modernism",
      "B. Creative salvage movement",
      "D. High-tech style"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 353
  },
  {
    "question": "What term is used to describe the new style that emerged in Germany during the 1890s as a distinct interpretation of the New Art style?",
    "options": [
      "A. Jugendstil",
      "B. Art Nouveau",
      "C. Renaissance",
      "D. Baroque"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 354
  },
  {
    "question": "What was the main influence on the design motifs of the Art Deco movement?",
    "options": [
      "A. Natural world motifs",
      "B. Historic and eclectic sources",
      "C. Technological advancements",
      "D. Minimalist aesthetics"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 355
  },
  {
    "question": "What was the highlight of General Motors' Highways and Horizons pavilion at the 1939-40 New York World's Fair?",
    "options": [
      "A. The Trylon and Perisphere",
      "B. The Democracity diorama",
      "C. The Bakelite Plastics exhibit",
      "D. The Futurama exhibit"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 356
  },
  {
    "question": "Which invention by James Hargreaves in 1764 significantly increased productivity in textile manufacturing?",
    "options": [
      "A. The power loom",
      "B. The steam engine",
      "C. The spinning jenny",
      "D. The water frame"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 357
  },
  {
    "question": "One of the key features of the Modernism movement is what?",
    "options": [
      "A. Focus on using classical elements and decoration.",
      "B. Rejection of unnecessary decoration, focusing on simplicity and functionality.",
      "C. Combination of free-form shapes and complex details.",
      "D. Focus on using natural and raw materials."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 358
  },
  {
    "question": "What was a key factor that allowed the United States to experience industrial growth during the 1920s?",
    "options": [
      "A. The early entry into World War I",
      "B. High duties on foreign imports and government subsidies",
      "C. A shortage of raw materials due to wartime depletion",
      "D. A decrease in consumer demand following the war"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 359
  },
  {
    "question": "When did the aesthetic movement appear?",
    "options": [
      "A. 17th century",
      "B. 18th century",
      "C. The first half of 19th century",
      "D. The second half of 19th century"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 360
  },
  {
    "question": "During the Middle Ages, what was the general impact of the feudal system on technological progress?",
    "options": [
      "A. It only affected military technology",
      "B. It slowed technological progress",
      "C. It accelerated technological advancements",
      "D. It had no noticeable impact"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 361
  },
  {
    "question": "What was the purpose of the Haus am Horn, designed by Georg Muche?",
    "options": [
      "A. To showcase traditional craftsmanship",
      "B. To promote luxury living",
      "C. To achieve comfort and economy through modern design",
      "D. To preserve historical architecture"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 362
  },
  {
    "question": "What concept was deeply concerned with at the Bauhaus, according to Gropius?",
    "options": [
      "A. Expressionism",
      "B. Construction",
      "C. Rationalism",
      "D. Industrialization"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 363
  },
  {
    "question": "At the newly built Portsmouth Block Mills - the first large-scale plant to employ machine tools for mass production, how many seperate machines were used to make the shell that formed the body of the pully block?",
    "options": [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 364
  },
  {
    "question": "After the exhibition ended, an Imperial art museum was established and later the Royal College of Art. Who was elected the first director of this museum and school?",
    "options": [
      "A. Henry Cole",
      "B. Joseph Paxton",
      "C. Augustus Welby Northmore Pugin",
      "D. Leonardo Da Vinci"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 365
  },
  {
    "question": "What was the most significant invention to be deigned during the Renaissance (1440) that led to the mass production of books, enabling thoughts and ideas to be disseminated widely for the first time in history?",
    "options": [
      "A. Modern printing method by Johann Gutenberg.",
      "B. Letterpress printing (embossed printing).",
      "C. The first steam-powered printer with a capacity of 480 pages per hour of Lord Stanhope's 1800 pages.",
      "D. Koenig 1814 Printer."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 366
  },
  {
    "question": "What did the 1970s oil crisis prompt American car manufactures to explore?",
    "options": [
      "A. The aerodynamic shape of the car",
      "B. The quality of the interior",
      "C. More fuel-eficient compact model",
      "D. None of the above"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 367
  },
  {
    "question": "In the Art Nouveau movement, what was the primary source of inspiration?",
    "options": [
      "A. Natural forms like leaves, peacock feathers, and blooming roses",
      "B. Classical historical motifs",
      "C. Industrial and machine forms",
      "D. Traditional folk patterns"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 368
  },
  {
    "question": "The polychromatic scheme of the Crystal Palace's interior aimed to: ...",
    "options": [
      "A. Showcase the potential of industrial paints",
      "B. Emphasize the structural elements of the building",
      "C. Create an artificial atmospheric effect within the space",
      "D. Reflect the cultural diversity of the exhibitors"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 369
  },
  {
    "question": "Which designer's work epitomized De Stijl's radical modernity?",
    "options": [
      "A. J. J. P. Oud",
      "B. Piet Mondrian",
      "C. Gerrit Rietveld",
      "D. Vilmos Huszár"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 370
  },
  {
    "question": "What types of objects did the Romans mass-produce to support their empire?",
    "options": [
      "A. Weapons, oil lamps, and roof tiles.",
      "B. Artworks and jewelry.",
      "C. Luxury goods for trade.",
      "D. Hand-crafted decorative items."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 371
  },
  {
    "question": "What is the name of this weapon designer?",
    "options": [
      "A. Samuel Colt.",
      "B. Christopher Dresser.",
      "C. Eli Whitley.",
      "D. William Morris."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 372
  },
  {
    "question": "What term describes the approach adopted by about ten designers in 1901 when they founded the Ecole Nancy to reform design by using nature as a template?",
    "options": [
      "A. Industrialization",
      "B. Technological Innovation",
      "C. Environmentalism",
      "D. Biomimicry"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 373
  },
  {
    "question": "What artistic movements influenced members of the Russian avant-garde during the 1910s?",
    "options": [
      "A. Renaissance art",
      "B. French cubism and Italian futurism",
      "C. Baroque painting",
      "D. Realism"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 374
  },
  {
    "question": "What were the typical design achievements of the Middle Ages?",
    "options": [
      "A. Improved water wheel.",
      "B. Hourglass.",
      "C. Plow.",
      "D. All of the above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 375
  },
  {
    "question": "During the latter half of the century in England, there was a growing questioning within intellectual circles of the widespread taste for Neoclassicism as well as the validity of the values it embraced- simplicity, harmony, symmetry, and ... - which were all too often doggedly pursued for the sake of fashion at the expense of design rationality.",
    "options": [
      "A. Ornamentation",
      "B. Proportion",
      "C. Color",
      "D. Texture"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 376
  },
  {
    "question": "Who designed the Pavillon de l'Esprit Nouveau, a modernist exhibit that contrasted with Art Deco opulence at the 1925 Paris exhibition?",
    "options": [
      "A. Emile-Jacques Ruhlmann",
      "B. Mies Van de Rohde",
      "C. Pierre Chareau",
      "D. Le Corbusier"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 377
  },
  {
    "question": "What design style in America was taking place at the same time as Arts and Crafts in Britain?",
    "options": [
      "A. Local Art",
      "B. Old Art",
      "C. New Art",
      "D. All is incorrect"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 378
  },
  {
    "question": "The designs of which artist were heavily influenced by Ernst Haeckel's biological studies?",
    "options": [
      "A. William Morris",
      "B. Victor Horta",
      "C. Charles Rennie Mackintosh",
      "D. Henry van de Velde"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 379
  },
  {
    "question": "What statement about profit is accurate?",
    "options": [
      "A. Profit = (Units Sold Price) - (Units Sold Variable Cost) - Fixed Cost",
      "B. Profit = Revenues - Costs",
      "C. Profit = Revenues - Variable Costs - Fixed Costs",
      "D. All of the mentioned"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 380
  },
  {
    "question": "The mass production of the Terracotta Army was primarily for: ...",
    "options": [
      "A. Military training purposes.",
      "B. Artistic display in Emperor Qin's palace.",
      "C. Honoring and protecting Emperor Qin in the afterlife.",
      "D. A demonstration of ancient Chinese entertainment."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 381
  },
  {
    "question": "In the early 1920s, what was the hub of sophisticated and elegant living, particularly for Art Deco designs?",
    "options": [
      "A. New York",
      "B. Berlin",
      "C. Paris",
      "D. London"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 382
  },
  {
    "question": "During the late 1960s and early 1970s, there was a movement emerged to reject the precepts of the modern movement, in which messy complexity offered far more potential for creative and intellectual engagement. What is the name of the movement?",
    "options": [
      "A. Creative Salvage movement",
      "B. Craft Revival movement",
      "C. Radical design movement",
      "D. Sustainable design movement"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 383
  },
  {
    "question": "Which of the following buildings is NOT an example of the Moderne Style in design?",
    "options": [
      "A. Villa Savoye by Le Corbusier",
      "B. Chrysler Building in New York.",
      "C. Scharff House by Frank Lloyd Wright.",
      "D. Bauhaus Building by Walter Gropius."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 384
  },
  {
    "question": "What was the Grand Tour, and what purpose did it serve for young gentlemen in the eighteenth century?",
    "options": [
      "A. A military expedition to learn leadership skills.",
      "B. A rite of passage to immerse in classical studies and cultural education.",
      "C. A tour of Gothic and Baroque art for aspiring architects.",
      "D. A journey to collect exotic influences for decorative arts."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 385
  },
  {
    "question": "Why did the Pre-Raphaelite Brotherhood get their name?",
    "options": [
      "A. They liked Raphael's style.",
      "B. They thought art was better before Raphael's influence.",
      "C. They wanted to teach classical art.",
      "D. They followed academic art rules."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 386
  },
  {
    "question": "What was the first mass-produced car with a body shape created by a stylist instead of an engineer\"",
    "options": [
      "A. Ford Model T",
      "B. Cadillac 1925",
      "C. LaSalle 1927",
      "D. Buick 1929"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 387
  },
  {
    "question": "One of the most notable features of De Stijl is the use of which colors in design?",
    "options": [
      "A. Black, white, gray, and primary colors like red, blue, and yellow.",
      "B. Yellow, brown, and orange.",
      "C. Green and red.",
      "D. Soft pastel colors."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 388
  },
  {
    "question": "Which country that conducted the first ever sea-launched air raid seaplane carrier, and also boasted the world's most formidable battle cruiser in June 1914?",
    "options": [
      "A. Japanese",
      "B. United Kingdom",
      "C. France",
      "D. US"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 389
  },
  {
    "question": "In the United States, what was considered as the brand decade when all kinds of consumer goods were sold in bright, colorful, expertly designed packaging?",
    "options": [
      "A. 1940s",
      "B. 1950s",
      "C. 1960s",
      "D. 1970s"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 390
  },
  {
    "question": "Which innovation made Columbia bicycles a trusted brand over time?",
    "options": [
      "A. Focus on aesthetic design over functionality",
      "B. Adherence to testing, quality control, and continuous improvement",
      "C. Introduction of the first electric-powered bicycle",
      "D. Exclusive partnerships with European manufacturers."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 391
  },
  {
    "question": "This is a painted escritoire and chair has designed by William Burges. Please determine the time of its birth?",
    "options": [
      "A. 17th century",
      "B. 19th century",
      "C. 18th century",
      "D. 20th century"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 392
  },
  {
    "question": "Which tools that allowed our hominid ancestors to make the first garments out of animal skills in order to enable them to perform tasks with more freedom of movement and to keep themselves warmer?",
    "options": [
      "A. Hand axes from flaked stone",
      "B. Simple harpoons and hook made of bone",
      "C. Needles out of sharpened bone",
      "D. Spearheads and arrowheads"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 393
  },
  {
    "question": "What was a major design feature of the German Tiger I tank?",
    "options": [
      "A. Its welded armor made of high-performance steel alloy",
      "B. Its lightweight design.",
      "C. Its ability to navigate underwater.",
      "D. Its capability to fly short distances."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 394
  },
  {
    "question": "Who led the De Stijl group?",
    "options": [
      "A. Theo van Doesburg",
      "B. Piet Mondrian",
      "C. Frank Lloyd Wright",
      "D. Walter Gropius"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 395
  },
  {
    "question": "In which year did Thomas Edison first unveil the electric light bulb?",
    "options": [
      "A. 1875",
      "B. 1881",
      "C. 1879",
      "D. 1883"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 396
  },
  {
    "question": "Who was one of the prominent architects of the Modernism movement with significant influence in 20th-century architecture?",
    "options": [
      "A. Frank Lloyd Wright.",
      "B. Antoni Gaudí.",
      "C. Salvador Dalí.",
      "D. Le Corbusier."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 397
  },
  {
    "question": "What is one of the key design principles of the Bauhaus movement?",
    "options": [
      "A. Using complex decorative elements to highlight the product.",
      "B. Focusing on combining art and technology with the goal of mass industrial production.",
      "C. Creating luxurious and intricate designs.",
      "D. Emphasizing the use of natural materials in all products."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 398
  },
  {
    "question": "What was the primary aim of the manifesto outlined by the De Stijl group in their magazine's first issue?",
    "options": [
      "A. Emphasizing individualism over universalism",
      "B. Advocating for traditional art forms",
      "C. Calling for a cultural purging and spiritual universality",
      "D. Rejecting the influence of modern art movements"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 399
  },
  {
    "question": "What term was used to describe the heavily decorated goods of the High Victorian style?",
    "options": [
      "A. Modernist Style",
      "B. Industrial Revolution Style",
      "C. Georgian Neoclassicism",
      "D. Fashionable High Victorian Style"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 400
  },
  {
    "question": "Which marketing strategy was NOT mentioned as part of Samuel Colt's approach?",
    "options": [
      "A. Public relations",
      "B. Product sampling",
      "C. Free firearm distribution to the military",
      "D. Print advertisements"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 401
  },
  {
    "question": "What field did the Aesthetics Movement of the late 19th century belong to?",
    "options": [
      "A. Architectual",
      "B. Fashion",
      "C. Product",
      "D. All of them"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 402
  },
  {
    "question": "During the mid-to late nineteenth century, another important .... also emerged with the formation of the Pre-Raphaelite Brotherhood (PRB).",
    "options": [
      "A. Exhibition",
      "B. Strand of design reform",
      "C. Designer",
      "D. Artist"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 403
  },
  {
    "question": "The Aesthetic movement was spurred on by the idea of ....",
    "options": [
      "A. \"art for design sake\".",
      "B. \"art for art's sake\".",
      "C. \"art for human sake\".",
      "D. \"art for women sake\"."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 404
  },
  {
    "question": "What was Henry Cole's role in the Museum of Manufactures?",
    "options": [
      "A. He was the chief financial officer.",
      "B. He was the curator of the 'Chamber of Horrors.'",
      "C. He was a tour guide for visitors.",
      "D. He was the main architect."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 405
  },
  {
    "question": "In the ____ century, the heavy moldboard plow increased food production.",
    "options": [
      "A. 7th",
      "B. 8th",
      "C. 9th",
      "D. 10th"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 406
  },
  {
    "question": "What invention from the thirteenth century mechanized the process of twisting wool or cotton into threads?",
    "options": [
      "A. The spinning wheel.",
      "B. The blast furnace.",
      "C. The hourglass.",
      "D. The water wheel."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 407
  },
  {
    "question": "What was the primary purpose of the Terracotta Army?",
    "options": [
      "A. To honor and protect Emperor Qin Shi Huang in the afterlife.",
      "B. To serve as a ceremonial offering to the gods.",
      "C. To showcase the craftsmanship of Qin's workforce.",
      "D. To act as a training ground for soldiers."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 408
  },
  {
    "question": "What common misunderstanding exists about invention and design?",
    "options": [
      "A. Invention is purely accidental, while design is planned, such as drawing, trial-and-error experimentation, or model-making.",
      "B. Design and invention are entirely separate processes.",
      "C. Invention does not require design-led thinking.",
      "D. Invention and design are somehow different from one another, yet an invention can only be the result of design-led thinking and some form of experimentation, or model-making."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 409
  },
  {
    "question": "Why did many of Leonardo da Vinci's designs remain theoretical?",
    "options": [
      "A. He lacked the materials to construct them.",
      "B. They were far ahead of their time and lacked practical application.",
      "C. He focused on painting rather than engineering.",
      "D. His clients were not interested in his inventions."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 410
  },
  {
    "question": "Which medieval invention allowed for the harnessing of water power into energy?",
    "options": [
      "A. The windmill",
      "B. The blast furnace",
      "C. The improved water wheel",
      "D. The mechanical clock"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 411
  },
  {
    "question": "What influenced American designers during the early 1940s to move away from streamlined forms?",
    "options": [
      "A. The increasing influence of Bauhaus design",
      "B. New tendencies in contemporary fine art exploring biomorphic shapes",
      "C. The need for more durable and functional designs",
      "D. Wartime restrictions on materials"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 412
  },
  {
    "question": "How did Samuel Colt influence the field of modern industrial design?",
    "options": [
      "A. By focusing only on functional improvements",
      "B. By pioneering a marketing-driven approach to manufacturing",
      "C. By rejecting public relations in favor of direct sales",
      "D. By designing firearms exclusively for military use"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 413
  },
  {
    "question": "What material did Harley Earl use for modeling and styling which became standard practice among car manufactures, and was then taken up by other indutries?",
    "options": [
      "A. Metal",
      "B. Clay",
      "C. Plastic",
      "D. Fiber Carbon"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 414
  },
  {
    "question": "What was the primary advantage of the design of the German pressed-steel jerry can fuel container?",
    "options": [
      "A. Its lightweight construction",
      "B. Its low production cost.",
      "C. Its aesthetic appeal",
      "D. Its robust construction with stamped indentations for extra strength and safety"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 415
  },
  {
    "question": "What made the Tiger I heavy tank a notable vehicle during World War II?",
    "options": [
      "A. Its lightweight design and high speed",
      "B. Its simple and cost-effective manufacturing process",
      "C. Its impressive firepower and welded armor",
      "D. Its ability to fly short distances"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 416
  },
  {
    "question": "Which notable American fighter aircraft designed during World War II was built for long-range bombing missions?",
    "options": [
      "A. P-51 Mustang",
      "B. F4U Corsair",
      "C. B-17 Flying Fortress",
      "D. P-40 Warhawk"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 417
  },
  {
    "question": "How did Dresser's viewpoint shift the design-reform debate?",
    "options": [
      "A. From Gothic Revival to Victorian Classicism",
      "B. From the Arts and Crafts Movement to Art Nouveau",
      "C. From the Aesthetic Movement's \"art for art's sake\" to \"art for industry's sake\"",
      "D. From Baroque Revival to Modern Minimalism"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 418
  },
  {
    "question": "What is Morris's tendency?",
    "options": [
      "A. Mainly use machinery in production",
      "B. Avoid using machinery in production",
      "C. Full use of machinery in production",
      "D. All is incorrect"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 419
  },
  {
    "question": "Which style this design belong to?",
    "options": [
      "A. Art Nouveau",
      "B. Renaissance",
      "C. Art and Crafl",
      "D. Modern Art"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 420
  },
  {
    "question": "Which customers are Morris products aimed at?",
    "options": [
      "A. The rich",
      "B. Poor people",
      "C. Middle class",
      "D. Everyone"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 421
  },
  {
    "question": "What was the main goal of Morris, Marshall, Faulkner & Co., founded by William Morris in 1861?",
    "options": [
      "A. To promote mechanized production.",
      "B. To infuse design with art and revitalize craft traditions.",
      "C. To create minimalist modern designs.",
      "D. To establish a Gothic Revival architecture firm."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 422
  },
  {
    "question": "What role did artists like John Flaxman play in Wedgwood's business?",
    "options": [
      "A. They worked as general laborers in his factories.",
      "B. They helped design aesthetically appealing products for industrial production.",
      "C. They developed new ceramic materials for his pottery.",
      "D. They managed Wedgwood's marketing campaigns."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 423
  },
  {
    "question": "During the Industrial Revolution, where did people move as a result of mass urbanization?",
    "options": [
      "A. From cities to the countryside",
      "B. From the countryside to cities",
      "C. Between various industrial cities",
      "D. From America to Europe"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 424
  },
  {
    "question": "What production method contributed significantly to the industrialization of the United States in the nineteenth century?",
    "options": [
      "A. Traditional handcrafting techniques",
      "B. Importation of European machinery",
      "C. Adoption of \"armory practice\" for mass production",
      "D. Reliance on agricultural exports"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 425
  },
  {
    "question": "What characteristic of the United States made it more receptive to industrial change compared to Europe?",
    "options": [
      "A. Its historical baggage",
      "B. Its decorative traditions",
      "C. Its young, forward-looking nature",
      "D. Its resistance to change"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 426
  },
  {
    "question": "What role did the educational system play in Germany's industrial revolution?",
    "options": [
      "A. It had little to no impact on industrial growth",
      "B. It focused mainly on the arts rather than sciences",
      "C. It provided a highly educated workforce necessary for industrial development",
      "D. It was underdeveloped and required significant reforms"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 427
  },
  {
    "question": "Which invention by Thomas Edison transformed the world by turning night into day?",
    "options": [
      "A. Phonograph",
      "B. Electric lightbulb",
      "C. Telephone",
      "D. Wireless telegraph"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 428
  },
  {
    "question": "What technology was utilized during wartime conflicts for communication purposes in World War?",
    "options": [
      "A. Fax machines",
      "B. Primitive radios",
      "C. Satellite phones",
      "D. Morse code"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 429
  },
  {
    "question": "What characteristic is most associated with the Art Manufactures to Industrial Products period?",
    "options": [
      "A. The use of strong geometric elements and simplification of details",
      "B. Focus on minimalism and the use of industrial materials",
      "C. A combination of craftsmanship and industrial production, emphasizing the improvement of product quality and aesthetics",
      "D. Floral motifs and abundant use of gold in decoration"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 430
  },
  {
    "question": "Which country developed the concept of sonar?",
    "options": [
      "A. Japan.",
      "B. Germany.",
      "C. The Soviet Union.",
      "D. The United States."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 431
  },
  {
    "question": "In ancient Egypt, (1) ___and (2) ___ were developed to aid the construction of buildings.",
    "options": [
      "A. ramps / levers",
      "B. blueprints / gauges",
      "C. rails / levels",
      "D. wheelbarrows / scaffolds"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 432
  },
  {
    "question": "What were the earliest Oldowan tools primarily made from?",
    "options": [
      "A. Metal",
      "B. Clay",
      "C. Stone",
      "D. Wood"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 433
  },
  {
    "question": "Three Ages mean",
    "options": [
      "A. Stone Age, Copper Age and Steel Age",
      "B. Brick Age, Plastic Age and Porosity Age",
      "C. Stone Age, Bronze Age and Iron Age",
      "D. Stone Age, Bronze Age and Fake Age"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 434
  },
  {
    "question": "How were the figures of the Terracotta Army produced?",
    "options": [
      "A. By hand-carving each figure individually.",
      "B. With imported tools from neighboring regions.",
      "C. Using systemized and standardized production methods.",
      "D. Through a process of trial and error."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 435
  },
  {
    "question": "The Roman Empire was successful in part due to its: ...",
    "options": [
      "A. Strict social hierarchy that discouraged design innovation.",
      "B. Reliance on slave labor for the production of weapons.",
      "C. Harnessing the power of design for mass manufacturing.",
      "D. Abstaining from trade and focusing on agriculture."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 436
  },
  {
    "question": "What was Hector Grimard's major contribution to Parisian architecture?",
    "options": [
      "A. The design of the Eiffel Tower",
      "B. His residential buildings in Montmartre",
      "C. Innovations in the use of concrete",
      "D. The creation of Paris Métro entrances"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 437
  },
  {
    "question": "The Dutch word stijl can also mean \" ... \" - elements used to support a structure. So, the name De Stijl encapsulated precisely the aims of the group: to form a constructive doctrine that would lead to a new, pure aesthetic.",
    "options": [
      "A. \"a post, jamb, or strut\"",
      "B. \"a post, jamb\"-",
      "C. \"strut\"",
      "D. None of these answers."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 438
  },
  {
    "question": "Who inspired for founding of Arts and Crafts movement?",
    "options": [
      "A. Selwyn Image",
      "B. Arthur Heygate Mackmurdo",
      "C. Morris",
      "D. Ruskin"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 439
  },
  {
    "question": "The British Army's rhomboid Mark I tank, nicknamed might be the one..... design most closely linked in our imaginations to World War I, thanks to countless newsreel clips showing its agonizingly slow but decisive advance.",
    "options": [
      "A. \"Big Willie,\"",
      "B. \"Browning FN M1900\"",
      "C. \"Willie M1907,\"",
      "D. \"Dreyse M 1907\""
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 440
  },
  {
    "question": "What was Le Corbusier's famous dictum that summarized his minimalist approach to modern design?",
    "options": [
      "A. Form follows function",
      "B. Ornament is crime",
      "C. Less is more",
      "D. Both of the above"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 441
  },
  {
    "question": "Where did the late 19th century design exhibitions take place?",
    "options": [
      "A. London",
      "B. Paris",
      "C. Japan",
      "D. All of them"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 442
  },
  {
    "question": "How did Gutenberg's printing press influence the development of design?",
    "options": [
      "A. It allowed craftsmen to produce books entirely by hand.",
      "B. It enabled the widespread distribution of pattern books for replication.",
      "C. It replaced urban workshops as the primary source of design production.",
      "D. It discouraged the replication of original designs."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 443
  },
  {
    "question": "When was the term \"Industrial Revolution\" first used to describe this period of growth?",
    "options": [
      "A. In 1848 by John Stuart Mill",
      "B. In 1775 by William Hogarth",
      "C. During the late 17th century",
      "D. Around 1780"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 444
  },
  {
    "question": "What was the name of the world's first jet-powered fighter?",
    "options": [
      "A. Boeing B-17.",
      "B. North American P-51 Mustang.",
      "C. Messerschmitt Me 262.",
      "D. Supermarine Spitfire."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 445
  },
  {
    "question": "How did Loos's Café Museum project reflect his design philosophy?",
    "options": [
      "A. By using elaborate decorations to attract an elite clientele",
      "B. By mimicking the popular styles of Parisian cafés",
      "C. By emphasizing functionalism and simplicity in its interior design",
      "D. By focusing solely on the exterior architecture"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 446
  },
  {
    "question": "What was the main motivation behind Germany's industrialization process in the late 19th century?",
    "options": [
      "A. To compete with British technological advances",
      "B. The collective desire for a strong and powerful state",
      "C. To reduce the dependence on agricultural economies",
      "D. To improve the living standards of the general populace"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 447
  },
  {
    "question": "At the newly built Portsmouth Block Mills - the first large-scale plant to employ machine tools for mass production, how many seperate machines were used to make the shell that formed the body of the pully block? A 2",
    "options": [
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 448
  },
  {
    "question": "What inspired Leonardo da Vinci's designs for flying machines?",
    "options": [
      "A. His studies of ancient Greek texts.",
      "B. His understanding of natural mechanisms, including bird anatomy.",
      "C. His collaboration with other Renaissance scientists.",
      "D. His observations of wind currents in urban environments."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 449
  },
  {
    "question": "By the opening years of the twentieth century, .... buildings had become even more rectilinear and modern looking, as demonstrated by William E. Martin House in Oak Park (1902), with its strong vertical and horizontal planes, stucco facing, and banded windows",
    "options": [
      "A. Wright's",
      "B. Duchamp's",
      "C. Soulivan\"s",
      "D. Groupius"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 450
  },
  {
    "question": "When did the Art Manufactures to Industrial Products period begin to develop strongly?",
    "options": [
      "A. Late 18th century, early 19th century",
      "B. Mid 19th century, early 20th century",
      "C. Late 19th century, early 20th century",
      "D. Late 20th century"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 451
  },
  {
    "question": "The first use of the wheel, predating even carts, was likely a type of:...",
    "options": [
      "A. Potter's tool for shaping clay.",
      "B. Toy for children.",
      "C. Measurement device for land.",
      "D. Farm equipment for sowing seeds."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 452
  },
  {
    "question": "What was the \"Chamber of Horrors\" in the Museum of Ornamental Art?",
    "options": [
      "A. A section showcasing dangerous industrial machines",
      "B. A display of low-quality, excessively ornate items",
      "C. A display of contemporary art",
      "D. An exhibit of Georgian Neoclassical designs"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 453
  },
  {
    "question": "What is the significance of Oldowan tools in human history?",
    "options": [
      "A. They were the first decorative artifacts.",
      "B. They demonstrated early humans' ability to plan and design.",
      "C. They were used exclusively for hunting large animals.",
      "D. They replaced tools made from wood entirely."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 454
  },
  {
    "question": "What type of material was used extensively in modernist furniture design for its hygienic properties and low cost?",
    "options": [
      "A. Plywood",
      "B. Tubular steel",
      "C. Rattan",
      "D. None of the above"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 455
  },
  {
    "question": "What time period was this lamp designed?",
    "options": [
      "A. 19th century",
      "B. 18th century",
      "C. 20th century",
      "D. 17th century"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 456
  },
  {
    "question": "What was a major cultural and educational influence during the Grand Tour undertaken by young gentlemen in the eighteenth century?",
    "options": [
      "A. Learning modern languages",
      "B. Exploring ancient Greek and Roman culture",
      "C. Studying agricultural methods",
      "D. Trading exotic goods"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 457
  },
  {
    "question": "Revolution sprouted as early as the late seventeenth century, it was not until the mid-eighteenth century that the momentum of industrial progress really started to pick up, particularly with the arrival of what many consider its first real design: the ___, designed by James Hargreaves around 1764.",
    "options": [
      "A. spinning machine",
      "B. rotative steam engine",
      "C. spinning jenney",
      "D. rotative steam machine"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 458
  },
  {
    "question": "Who founded the Art and Crafts group?",
    "options": [
      "A. Arthur Heygate Markmurdo",
      "B. Ruskin",
      "C. Selwyn Image",
      "D. All of them"
    ],
    "answer": [
      "A",
      "C"
    ],
    "multiAnswer": true,
    "id": 459
  },
  {
    "question": "Which style does this poster design belong to?",
    "options": [
      "A. Comtemprory",
      "B. Modern Art",
      "C. Art Nouveau",
      "D. Pop Art"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 460
  },
  {
    "question": "When did the pre-Raphaelite movement appear?",
    "options": [
      "A. First half of the 18th century",
      "B. Second half of the 18th century",
      "C. First half of the 19th century",
      "D. Second half of the 19th century"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 461
  },
  {
    "question": "What concept did the Theosophical Society emphasize, which resonated with members of the De Stijl group?",
    "options": [
      "A. Materialism",
      "B. Individualism",
      "C. Spiritual enlightenment",
      "D. Dogmatic tradition"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 462
  },
  {
    "question": "By the late 1920s in America, what did consumers expect from car manufacturers?",
    "options": [
      "A. Cheaper prices",
      "B. More color options",
      "C. Fewer color options",
      "D. No difference"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 463
  },
  {
    "question": "What is the acronym for the Pre-Raphaelite movement?",
    "options": [
      "A. PR",
      "B. PRB",
      "C. RPB",
      "D. BPR"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 464
  },
  {
    "question": "What was often the main distinction between an artist and an artisan in the Middle Ages?",
    "options": [
      "A. The types of projects they worked on.",
      "B. Their level of training and technical accomplishment.",
      "C. Their affiliation with craft guilds.",
      "D. The materials they used in their work."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 465
  },
  {
    "question": "The 1920s in the United States are also known as what?",
    "options": [
      "A. The Dark Ages",
      "B. The Golden Age",
      "C. The Prosperous Era",
      "D. The Development Era"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 466
  },
  {
    "question": "The famous Great Bed of Ware, which now resides in London's Victoria and Albert Museum, might have been larger than the average merchant's bed, being intended for an inn and the accommodation of up to (1) _ people, but is still an excellent example of European design during the Renaissance period, with its solid, no-nonsense (2) _ construction enlivened with heavy carving. (Choose orderly correct answers).",
    "options": [
      "A. 14",
      "B. 15",
      "C. pine-plank",
      "D. oak-plank",
      "E. olive-plank"
    ],
    "answer": [
      "B",
      "D"
    ],
    "multiAnswer": true,
    "id": 467
  }
];
