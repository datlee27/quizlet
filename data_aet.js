// AET - 234 Câu hỏi Aesthetics & Art Theory
// Trích xuất & chuẩn hoá từ Google Docs

const AET_QUESTIONS = [
  {
    "question": "Fill in the blank: Arthur Danto argues that what is needed to perceive something like the Fountain as art is ... the artwork itself is simply not achievable.",
    "options": [
      "A. Atmosphere of artistic theory",
      "B. Knowledge of art history",
      "C. Artworld.",
      "D. All of the above"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 1
  },
  {
    "question": "What impact has the feminist movement had on artistic philosophy?",
    "options": [
      "A. Spawned various ideological movements such as contextualism.",
      "B. Brought art back into a broader societal context.",
      "C. Raised questions about the ethical and political roles of art.",
      "D. All of the above answers."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 2
  },
  {
    "question": "\"Mr Blobby\" is typically found at what depth below the ocean surface?",
    "options": [
      "A. 10 meters",
      "B. 100 meters",
      "C. 1,000 meters",
      "D. 10,000 meters"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 3
  },
  {
    "question": "According to Novitz, what is necessary to understand a fictional work correctly?",
    "options": [
      "A. Believe in the story.",
      "B. Treat the story as if it were real.",
      "C. Interpret and treat the story as if it were real.",
      "D. Implicitly understand that one is reading a fictional work."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 4
  },
  {
    "question": "According to Taylor, why is the portrayal of black characters as victims in films harmful?",
    "options": [
      "A. Because it makes black people invisible.",
      "B. Because it reinforces the stereotype that black people are victims.",
      "C. Because it makes white people feel guilty.",
      "D. Because it makes black people feel inferior."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 5
  },
  {
    "question": "According to Tom Leddy, what roles do \"superficial aesthetic qualities\" like tidiness or messiness play? Is tidiness or messiness a criterion for evaluating whether a work is art or non-art?",
    "options": [
      "A. They are unimportant parts of our aesthetic experience.",
      "B. They are important parts of our aesthetic experience, applicable to both artistic and non-artistic environments.",
      "C. They are important parts of our aesthetic experience, but only applicable to non-artistic environments.",
      "D. They are important parts of our aesthetic experience, but only applicable to the artistic environment."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 6
  },
  {
    "question": "According to Berleant, what is the most important factor in evaluating the aesthetics of the living environment?",
    "options": [
      "A. The natural beauty of the environment.",
      "B. The extent of human intervention in the environment.",
      "C. How humans interact with the environment.",
      "D. The economic value of the environment."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 7
  },
  {
    "question": "\"What do 'feminist art' and the aesthetics of Black people have in common?",
    "options": [
      "A. No commonality",
      "B. Both focus on the beauty of the human body.",
      "C. Both are created by Black women.",
      "D. Both challenge the assumptions about the nature of art and artistic beauty."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 8
  },
  {
    "question": "What causes us to describe a work of art with emotions?",
    "options": [
      "A. Artworks can be described using language.",
      "B. Artworks can evoke emotions in the viewers.",
      "C. Artworks can be compared to other artworks.",
      "D. Artworks can be analyzed according to their constituent elements."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 9
  },
  {
    "question": "According to contextualists, what is the main difference between an original work of art and a derivative work?",
    "options": [
      "A. The value of the artwork.",
      "B. The reputation of the author.",
      "C. The creative conditions of the artwork.",
      "D. The aesthetic properties of the artwork."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 10
  },
  {
    "question": "How is Tom Waits's music often perceived by both critics and fellow musicians?",
    "options": [
      "A. As strictly adhering to traditional musical styles and conventions",
      "B. As predominantly blues ballads or sea shanties, reflecting his diverse influences",
      "C. As adventure songs and Halloween music, combining tradition with innovation",
      "D. As exclusively belonging to a cult following, without broader appeal"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 11
  },
  {
    "question": "When does a description of an artwork not convey an evaluation of its value?",
    "options": [
      "A. When the description emphasizes the emotions the artwork evokes.",
      "B. When the description refers to the form or color without commenting on its value.",
      "C. When the description uses evaluative terms like \"impressive\" or \"unappealing.\"",
      "D. When the description reflects the viewer's personal opinion."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 12
  },
  {
    "question": "According to Berys Gaut, intentionalist critics like Hirsch and anti-intentionalist critics like Wimsatt and Beardsley are trying to do?",
    "options": [
      "A. Explaining the meaning of a work of art.",
      "B. Analysis of various aspects of interpretation",
      "C. To find a universal theory of interpretation",
      "D. Evaluating the value of a work of art"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 13
  },
  {
    "question": "What is the role of music according to Pythagoras?",
    "options": [
      "A. As a form of entertainment.",
      "B. As a tool to explore order and purify the soul.",
      "C. As a means of self-expression.",
      "D. As a means to earn money."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 14
  },
  {
    "question": "According to R. G. Collingwood, what makes true art?",
    "options": [
      "A. Arouse emotions in the audience.",
      "B. Entertain the audience",
      "C. Showcase the artist's skills",
      "D. To reflect reality honestly"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 15
  },
  {
    "question": "Which of the following techniques can help overcome neurological obstacles to thinking about the future effectively?",
    "options": [
      "A. Mindfulness meditation",
      "B. Ignoring all future possibilities",
      "C. Catastrophizing",
      "D. Focusing solely on present pleasures"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 16
  },
  {
    "question": "According to Kant, how can we evaluate the beauty of an object?",
    "options": [
      "A. By comparing it to a definite concept of beauty.",
      "B. By using simple rules to evaluate its qualities.",
      "C. By using intuition.",
      "D. By comparing it to other objects."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 17
  },
  {
    "question": "According to Shusterman, how can the suppression of bad art to allow good art to flourish be justified?",
    "options": [
      "A. By arguing that bad art can harm society.",
      "B. By arguing that good art serves the ultimate moral benefit.",
      "C. By arguing that good art will always prevail over bad art.",
      "D. By arguing that bad art is a waste of time and money."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 18
  },
  {
    "question": "According to the anti-intentionalist perspective of Wimsatt and Beardsley, which interpretation of the film \"Plan 9 from Outer Space\" is correct?",
    "options": [
      "A. The interpretation intended by the author.",
      "B. The interpretation that best fits the artwork.",
      "C. The interpretation agreed upon by film critics.",
      "D. The interpretation that makes the film successful."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 19
  },
  {
    "question": "(Kiểu trả lời khác: The interpretation consistent with the artwork.) According to Ronald W. Hepburn, why are philosophers indifferent to natural beauty?(073-356-8678)",
    "options": [
      "A. Natural beauty is not important.",
      "B. Natural beauty cannot be explained.",
      "C. Natural beauty is not as beautiful as art.",
      "D. Natural beauty is not suitable for aesthetic studies."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 20
  },
  {
    "question": "According to Monroe C. Beardsley, can a toaster be considered a work of art?",
    "options": [
      "A. Yes, if it's designed by a highly intelligent Bauhaus designer.",
      "B. Yes, if it is intended to satisfy aesthetic preferences.",
      "C. No, because it does not create an aesthetic effect for the viewer.",
      "D. No, because it is not an object created by an artist."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 21
  },
  {
    "question": "When we practice futures thinking methods, they can help us build SEVEN key strengths. One of the strengths is Creativity. Which of the following best describes Creativity in terms of futures thinking?",
    "options": [
      "A. You transcend traditional ideas, and invent new possibilities. You can imagine things that don't exist today or have never happened before.",
      "B. You anticipate hard to see possibilities that others can't or won't see. You don't get blindsided by the future. You see it coming.",
      "C. You accept that things can be different than they are now, that virtually anything can change. This is the opposite of having a fixed or a stuck mindset.",
      "D. You have a strong awareness of the hopes and fears of others. You pay close attention to how any future could affect different groups of people and communities differently."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 22
  },
  {
    "question": "Fill the blank: The relationship between the moral value and aesthetic value of an artwork, according to Anderson and Dean, is...",
    "options": [
      "A. They are one.",
      "B. They are unrelated.",
      "C. Moral value is more important than aesthetic value.",
      "D. Aesthetic value is more important than moral value."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 23
  },
  {
    "question": "According to Levinson, who is the \"appropriate\" reader to interpret a literary work?",
    "options": [
      "A. The reader with knowledge of the literary tradition to which the work belongs.",
      "B. The reader familiar with other works by the author.",
      "C. The reader knowledgeable about the public persona of the author.",
      "D. All of the above."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 24
  },
  {
    "question": "In the anti-intentionalist perspective, what is the \"correct\" interpretation of a work of art?",
    "options": [
      "A. The interpretation intended by the author.",
      "B. There is no interpretation that is \"correct.\"",
      "C. The interpretation by critics.",
      "D. The interpretation that best fits the artwork."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 25
  },
  {
    "question": "How is Tom Waits's music often described?",
    "options": [
      "A. Accessible and market-friendly",
      "B. Smooth and melodious",
      "C. Hard to listen to and incomprehensible",
      "D. Either accessible or very difficult to access"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 26
  },
  {
    "question": "Which film does Carroll use as an example to discuss the idea of subversive filmmaking?",
    "options": [
      "A. \"Plan 9 From Outer Space\"",
      "B. \"Night of the Living Dead\"",
      "C. \"The Day the Earth Stood Still\"",
      "D. \"The War of the Worlds\""
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 27
  },
  {
    "question": "Since when has the term 'Ars' been mentioned?",
    "options": [
      "A. Ancient Greece",
      "B. The Middle Ages",
      "C. The Renaissance",
      "D. The Enlightenment"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 28
  },
  {
    "question": "What is Aristotle's main disagreement with Plato regarding poetry?",
    "options": [
      "A. Poetry should focus on reason rather than emotion.",
      "B. Poetry is a poor representation of reality.",
      "C. Poetry has a negative impact on the human condition.",
      "D. Poetry is not a uniquely human characteristic."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 29
  },
  {
    "question": "Hegel agrees with which of Kant's views on beauty (found in nature or in art)?(073-356-8678)",
    "options": [
      "A. Nature is more beautiful than art.",
      "B. The beauty of art is a product of human intellect.",
      "C. Both art and nature possess beauty.",
      "D. The beauty of nature is the beauty of a particular external appearance."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 30
  },
  {
    "question": "What sparked a renewed interest in natural aesthetics in philosophy after a period of neglect?",
    "options": [
      "A. The publication of R. W. Hepburn's influential article, \"Contemporary Aesthetics and the Neglect of Natural Beauty.\"",
      "B. The rise of the fine arts.",
      "C. Immanuel Kant's prioritization of natural beauty over artistic beauty.",
      "D. G.W.F. Hegel's reversal of priorities, valuing artistic beauty over natural beauty."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 31
  },
  {
    "question": "According to which view is the meaning of a work of art primarily determined by?",
    "options": [
      "A. The author's intention",
      "B. The content of the work",
      "C. The reader",
      "D. All three factors above"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 32
  },
  {
    "question": "According to critic Daniel Durchholz, how was Tom Waits's singing voice developed?",
    "options": [
      "A. Through extensive vocal training and classical techniques",
      "B. By performing in smoky bars and clubs for many years",
      "C. By soaking his voice in a vat of bourbon, leaving it in a smokehouse, and running it over with a car",
      "D. Through a combination of natural talent and professional coaching"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 33
  },
  {
    "question": "According to Margolis, what would happen if all the tokens of an artwork were destroyed?",
    "options": [
      "A. The artwork will still exist.",
      "B. The artwork will be replaced by a new artwork.",
      "C. The original artwork will cease to exist.",
      "D. The artwork will be converted into a different form of art."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 34
  },
  {
    "question": "Who was the first to distinguish \"artworks\" from \"handicrafts\"?",
    "options": [
      "A. I. Kant",
      "B. R.G.Collingwood.",
      "C. Clive Bell",
      "D. Monroe Beardsley"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 35
  },
  {
    "question": "Which theory does Berys Gaut challenge in his essay 'Interpreting the Arts: The Patchwork Theory'?",
    "options": [
      "A. Global theory of interpretation",
      "B. Intentionalist theory",
      "C. Anti-intentionalist theory",
      "D. Hypothetical intentionalist theory"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 36
  },
  {
    "question": "Among the philosophers below, who argued that art is an 'open' concept?",
    "options": [
      "A. Monroe Beardsley",
      "B. Morris Weitz",
      "C. R.G. Collingwood",
      "D. Arthur Danto"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 37
  },
  {
    "question": "According to Anne Eaton, why is it 'native' or 'mischievous' to remove the special position of the artist or critic from the equation?(073-356-8678)",
    "options": [
      "A. Because it would make art meaningless.",
      "B. Because it would perpetuate the 'default' dominant position in history, historically assigned to men and women corresponding roles.",
      "C. Because it would make art apolitical.",
      "D. Because it would make art amoral."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 38
  },
  {
    "question": "What is the purpose of an 'Introduction: Aesthetics and the Philosophy of Art, An Extremely Brief History'?",
    "options": [
      "A. Provide a comprehensive and complete history of Western aesthetics.",
      "B. Highlighting some central themes in the Western aesthetic tradition.",
      "C. Explain the difference between 'aesthetics' and 'philosophy of art'.",
      "D. Analyzing contemporary works of art involves examining various aspects"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 39
  },
  {
    "question": "According to I. Kant, what creates the sense of the sublime?",
    "options": [
      "A. Art",
      "B. Nature",
      "C. Both art and nature",
      "D. Nothing"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 40
  },
  {
    "question": "What does the Blobfish eat?",
    "options": [
      "A. Algae",
      "B. Small fish",
      "C. Organic matter particles",
      "D. Aquatic plants"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 41
  },
  {
    "question": "Who argued that defining art is at best a matter of describing what counts as an accepted work at any one time; the hope of finding some 'real' definition of art - some set of necessary and sufficient conditions - is a fruitless one, as that definition is always subject to change with the next artistic revolution?",
    "options": [
      "A. Oswald Hanfling did not argue as such. Oswald Hanfling believes that \"An artwork is a kind of creation whose primary function is to provide aesthetic satisfaction to others.\"",
      "B. R.G. Collingwood",
      "C. Paul Ziff",
      "D. Clive Bell"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 42
  },
  {
    "question": "According to radical constructivism, when two people interpret the same work of art, will they create two different meanings?",
    "options": [
      "A. They will create the same artwork.",
      "B. They will create two different artworks.",
      "C. They will not create any artwork.",
      "D. They will destroy the artwork."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 43
  },
  {
    "question": "Fill the blank: A revolutionary art theory, according to Thomasson, is...",
    "options": [
      "A. A theory suitable for ordinary art practice.",
      "B. A theory that explains art in a new way.",
      "C. A theory accepted by many artists.",
      "D. An easy-to-understand theory."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 44
  },
  {
    "question": "According to Francis Hutcheson, where is beauty found?",
    "options": [
      "A. Proportion.",
      "B. \"Uniformity amidst variety\".",
      "C. Harmony.",
      "D. Balance."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 45
  },
  {
    "question": "What are the unresolved issues in Clive Bell's Formalist Theory?",
    "options": [
      "A. Failure to explain the significance of form and aesthetic emotion",
      "B. Art is a matter of form, not of content.",
      "C. He dismisses \"descriptive painting\" as not being art.",
      "D. All of the above viewpoints."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 46
  },
  {
    "question": "According to George Dickie, what factor constitutes a work of art?",
    "options": [
      "A. Aesthetics",
      "B. Ideas",
      "C. The recognition by the art world.",
      "D. The material value of the artwork"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 47
  },
  {
    "question": "Which term from the passage typically denotes a value judgment when assessing artworks?(073-356-8678)",
    "options": [
      "A. Elegant",
      "B. Black",
      "C. Square",
      "D. Imposing"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 48
  },
  {
    "question": "Who argued that \"works of art are not created out of nothing, but depend on preexisting art by adhering to, advancing, or challenging existing artistic traditions\"?",
    "options": [
      "A. Jerrold Levinson",
      "B. R.G. Collingwood",
      "C. George Dickie",
      "D. Morris Weitz"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 49
  },
  {
    "question": "Fill in the blank Berys Gaut argues against a global theory of interpretation in his essay \"Interpreting the Arts: The Patchwork Theory\" because:",
    "options": [
      "A. Intentionalist theories are always correct.",
      "B. There are no acceptable consequences of interpreting an author's intent.",
      "C. Authors can fail to achieve their intended meaning in a work.",
      "D. The text itself can contribute to meaning, regardless of authorial intent."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 50
  },
  {
    "question": "According to Anthony Ashley Cooper, 3rd Earl of Shaftesbury, what is the basis of our perception of beauty?",
    "options": [
      "A. Imagination",
      "B. Personal experience.",
      "C. The innate concept.",
      "D. Imagination and Personal experience."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 51
  },
  {
    "question": "How does Aristotle view the role of the artist in imitating reality?",
    "options": [
      "A. The artist should only create perfect replicas of the real world.",
      "B. The artist should focus on portraying the negative aspects of reality.",
      "C. The artist can improve upon reality by incorporating universals.",
      "D. The artist should primarily document historical events."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 52
  },
  {
    "question": "What is the key difference between Aristotle's view on beauty and the views of his predecessors?",
    "options": [
      "A. He believes beauty is based on objective qualities, not subjective experience.",
      "B. He emphasizes the importance of moderation in achieving beauty.",
      "C. He defines beauty solely in terms of size and order.",
      "D. He rejects the Pythagorean connection of beauty to mathematics."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 53
  },
  {
    "question": "What is the main difference between Pythagoras's view and Gorgias's view of the impact of art?",
    "options": [
      "A. Pythagoras believed that art has a positive effect, whereas Gorgias believed that art has a negative effect.",
      "B. Pythagoras believed that art has a lasting effect, while Gorgias believed that art has a transient effect.",
      "C. Pythagoras believed that art affects the soul, while Gorgias believed that art affects emotions.",
      "D. Pythagoras believed that art has a purifying effect, while Gorgias believed that art has a stimulating effect."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 54
  },
  {
    "question": "What is the relationship between 'Aesthetics' and 'The Philosophy of Art'?",
    "options": [
      "A. The two terms are completely different and unrelated.",
      "B. Two terms are often used interchangeably to refer to the same field of study.",
      "C. \"Aesthetics\" is a subfield of \"philosophy of art.\"",
      "D. \"The philosophy of art\" is a subfield of \"aesthetics.\""
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 55
  },
  {
    "question": "What did Marsilio Ficino do that contributed to the revival of Platonic thought?",
    "options": [
      "A. Criticized Plato's theories in favor of other classical thinkers.",
      "B. Translated Plato's complete works into a spoken language.",
      "C. Developed entirely original theories unrelated to Plato.",
      "D. Argued against the Neoplatonist concept of beauty."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 56
  },
  {
    "question": "According to Marcilio Ficino, how do we perceive beauty?",
    "options": [
      "A. Through the perfect forms of beauty found in the things themselves.",
      "B. Through a mental alignment with our innate ideas of beauty.",
      "C. Through the skill of the artist in capturing perfect forms.",
      "D. Through the divine inspiration that strikes the poet during creation."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 57
  },
  {
    "question": "According to Paul Ziff, can a true definition of art be found?(073-356-8678)",
    "options": [
      "A. Yes",
      "B. No.",
      "C. Not for sure.",
      "D. Not mentioned"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 58
  },
  {
    "question": "How does Levinson define a new work of art?",
    "options": [
      "A. Some exhibited features of the artwork.",
      "B. Its relationship with a formal or informal artistic organization.",
      "C. Its relationship with pre-existing art.",
      "D. Our experience of the artwork."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 59
  },
  {
    "question": "Which approach does Berys Gaut advocate for in interpretation theories?",
    "options": [
      "A. Intentionalism",
      "B. Anti-intentionalism",
      "C. Hypothetical intentionalism",
      "D. Reader-response criticism"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 60
  },
  {
    "question": "The claim \"Last Leaf\" is a song about death according to Krausz's theory, is it correct?",
    "options": [
      "A. True, because it adds to the meaning of the work.",
      "B. False, because it changes the meaning of the work.",
      "C. Cannot be determined, because the meaning of the work is not predetermined.",
      "D. Depends on the context."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 61
  },
  {
    "question": "What is one characteristic often used to describe Tom Waits's albums?",
    "options": [
      "A. Mainstream appeal and radio-friendliness",
      "B. Smooth and polished production quality",
      "C. Varied levels of accessibility, ranging from commercially friendly to highly eclectic",
      "D. Traditional and conventional songwriting structures"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 62
  },
  {
    "question": "According to Robert Stecker, what is the ultimate purpose of our interest in experiencing art?",
    "options": [
      "A. The purpose of art.",
      "B. The intrinsic value of art.",
      "C. The joy that art brings.",
      "D. The utilitarian value of art."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 63
  },
  {
    "question": "Fill the blank: The most important thing, according to Pettit, to experience a work of art is...",
    "options": [
      "A. Understanding the author and the artwork.",
      "B. Experiencing the artwork under suitable conditions.",
      "C. Having knowledge about art.",
      "D. Having well-functioning senses."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 64
  },
  {
    "question": "Pythagoras and his followers believed that beauty arose from...?",
    "options": [
      "A. Irregularity and complexity.",
      "B. Harmony, order, and regularity.",
      "C. Personal emotions and intuition.",
      "D. Cultural and social factors."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 65
  },
  {
    "question": "What is Leon Battista Alberti's view on beauty?",
    "options": [
      "A. Beauty is subjective and varies greatly among individuals.",
      "B. Judgments of beauty are based on an innate sense of beauty and lead to universal agreement on what is beautiful.",
      "C. Beauty can only be appreciated by those with a particularly acute sense of taste.",
      "D. The sense of beauty is entirely separate from the moral sense."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 66
  },
  {
    "question": "According to Sibley, what is the relationship between the non-aesthetic and aesthetic qualities of a work of art?",
    "options": [
      "A. Non-aesthetic qualities completely determine the aesthetic qualities of a work.",
      "B. Non-aesthetic qualities have no relation to the aesthetic qualities of a work.",
      "C. Non-aesthetic qualities can influence aesthetic qualities but do not guarantee them.",
      "D. Non-aesthetic qualities always exclude certain aesthetic qualities."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 67
  },
  {
    "question": "According to Jerrold Levinson, what determines the meaning of a literary work?(073-356-8678)",
    "options": [
      "A. Word-sequence meaning.",
      "B. Utterer's meaning.",
      "C. Utterance meaning.",
      "D. Autonomy of the text."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 68
  },
  {
    "question": "Why doesn't the ontological model of natural kinds apply to works of art?",
    "options": [
      "A. Because works of art lack essential nature.",
      "B. Because works of art are always changing.",
      "C. Because works of art are created by humans.",
      "D. Because works of art cannot be distinguished by examining their composition."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 69
  },
  {
    "question": "Which book is authored by Clive Bell?",
    "options": [
      "A. The Role of Theory in Aesthetics",
      "B. The Principles of Art",
      "C. Art",
      "D. Institutional Theory of Art"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 70
  },
  {
    "question": "What is an advantage in Collingwood's artistic view/perspective?",
    "options": [
      "A. It can be applied universally to all forms of art.",
      "B. Distinguishes artwork from art itself, essentially a spiritual rather than a material thing.",
      "C. Argues about \"entertainment art\".",
      "D. Argues about magic art."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 71
  },
  {
    "question": "Who stated: \"An artwork is something created with the purpose of providing others with the satisfaction of aesthetic pleasure\"?",
    "options": [
      "A. Monroe Beardsley",
      "B. Oswald Hanfling",
      "C. George Schlesinger",
      "D. Richard Lind"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 72
  },
  {
    "question": "According to Aristotle, what is tragedy?",
    "options": [
      "A. A story about fortunate events happening to people with good character.",
      "B. A story about absurd events happening to people with poor character.",
      "C. A story about unfortunate events happening to people with good character.",
      "D. A story about unfortunate events happening to people with poor character."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 73
  },
  {
    "question": "According to Aristotle, what makes tragedy appealing?",
    "options": [
      "A. The characters in tragedy are famous individuals.",
      "B. Tragedy tells true stories.",
      "C. Tragedy has a plot arranged in a chain of cause and effect.",
      "D. Tragedy uses poetic language."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 74
  },
  {
    "question": "Why is the movie \"The Exorcist\" considered so scary, even though it is a work of fiction?",
    "options": [
      "A. Based on a true story.",
      "B. Evokes primal human fears.",
      "C. Uses many special effects.",
      "D. Filmed in a frightening location."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 75
  },
  {
    "question": "The notion of art with an aesthetic function by Monroe Beardsley, Oswald Hanfling, George Schlesinger, and Richard Lind faces what issues?",
    "options": [
      "A. Overlooks many other purposes of art.",
      "B. Neglects the expressive aspect of art.",
      "C. Equates the aesthetic function of art with non-art.",
      "D. All of the above issues."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 76
  },
  {
    "question": "Which of the following definitions is not by George Dickie?",
    "options": [
      "A. \"An artist is someone who participates with understanding in the making of a work of art.\"",
      "B. \"A work of art is an artifact of a kind created to be presented to an artworld public.\"",
      "C. \"A public is a set of persons the members of which are prepared in some degree to understand an object which is presented to them.\"",
      "D. \"A work of art is any creative arrangement made by one or more media, with the primary function of conveying an important aesthetic object.\""
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 77
  },
  {
    "question": "According to Clive Bell, what is art?",
    "options": [
      "A. It is a means to achieve a beautiful spiritual state.",
      "B. It is something that evokes aesthetic emotions.",
      "C. It is a human activity that brings moral benefits.",
      "D. All of the above answers are correct."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 78
  },
  {
    "question": "Which statement is correct about Marcel Duchamp's artwork Fountain?",
    "options": [
      "A. Fountain was exhibited at the 1917 exhibition of the Society of Independent Artists in New York.",
      "B. Fountain is considered the most famous artwork of the 20th century.",
      "C. Fountain is Marcel Duchamp's first Readymade artwork.",
      "D. Fountain was rejected by the Society of Independent Artists at the 1917 exhibition."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 79
  },
  {
    "question": "Which information is not correct about the artist Marcel Duchamp?",
    "options": [
      "A. Duchamp is the author of the famous painting Les Demoiselles d'Avignon (1907).",
      "B. Marcel Duchamp is a famous sculptor of the 20th century.",
      "C. Before becoming a significant artist of Dadaism, Duchamp was involved in Futurism.",
      "D. Duchamp is considered one of the important artists of 20th-century Modern art."
    ],
    "answer": [
      "A",
      "D"
    ],
    "multiAnswer": true,
    "id": 80
  },
  {
    "question": "What role did the term 'Fine Art' play in the 18th century?",
    "options": [
      "A. Providing a definition of art",
      "B. Asserting the specificity of art",
      "C. Contributing to distinguishing art from other areas of skill",
      "D. It was in the 18th century that the concept of \"fine art\" emerged, gathering the Arts with a capital 'A' and distinguishing them from other areas of skill."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 81
  },
  {
    "question": "Who is considered the first to aim at defining Art?",
    "options": [
      "A. Aristotle",
      "B. Plato",
      "C. I. Kant",
      "D. St. Augustine"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 82
  },
  {
    "question": "How did Louis Daguerre influence the artistic views of the 19th century?",
    "options": [
      "A. Triggered a revolution in the history of painting",
      "B. Affirmed art's departure from imitation",
      "C. Introduced a definition of art",
      "D. Changed the perception of expression in art"
    ],
    "answer": [
      "A",
      "B",
      "D"
    ],
    "multiAnswer": true,
    "id": 83
  },
  {
    "question": "According to Bicknell, what is the respectful attitude that performers and audiences should have when playing or listening to blues music?",
    "options": [
      "A. Focus on musical technique.",
      "B. Focus on the performer's emotions.",
      "C. Focus on the song's significance to the audience",
      "D. Focus on the history of blues music."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 84
  },
  {
    "question": "According to Virginia Woolf, what is necessary for a woman to be able to write?(073-356-8678)",
    "options": [
      "A. Natural talent.",
      "B. Formal education.",
      "C. Natural talent and formal education.",
      "D. Money, a room of one's own, and educational attainment."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 85
  },
  {
    "question": "Who argued that \"to evaluate a new work of art, one must rely not only on its own characteristics but also on its relationship to previous ones\"?",
    "options": [
      "A. Jerrold Levinson",
      "B. Aristotle",
      "C. Collingwood",
      "D. George Schlesinger"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 86
  },
  {
    "question": "Which information is incorrect about the artwork Black Square (1915)?",
    "options": [
      "A. Black Square is a work by the artist Kasimir Malevich.",
      "B. Black Square is a representative work of Futurism.",
      "C. Black Square is a representative work of Suprematism.",
      "D. Black Square was exhibited in the \"0-10\" exhibition in 1915."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 87
  },
  {
    "question": "Why did the art critic Alexander Benois describe the Black Square as 'aloof', 'arrogant', and 'ostentatious'?",
    "options": [
      "A. Because the painting is just a black square.",
      "B. Because it is the most representative painting of Suprematism.",
      "C. Because of its placement in the exhibition hall.",
      "D. Because Black Square is significant for the innovation in Russian art."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 88
  },
  {
    "question": "How can we evaluate a painting?",
    "options": [
      "A. It's bland, boring.",
      "B. It's dull.",
      "C. Whether it's beautiful or not.",
      "D. The painting is drawn in black within a square."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 89
  },
  {
    "question": "\"Mr Blobby\" was awarded what title by the Ugly Animal Preservation Society in 2013?",
    "options": [
      "A. Most beautiful in the world",
      "B. the best at being ugly.",
      "C. the most intelligent",
      "D. the fiercest"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 90
  },
  {
    "question": "According to Torquato Tasso, where does the beauty of art originate from?",
    "options": [
      "A. The creative ability of humans.",
      "B. The techniques and tools of the artist.",
      "C. Direct imitation of the beauty of nature.",
      "D. Religious belief and spirituality"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 91
  },
  {
    "question": "What is the term used to describe the academic discipline that focuses on the study of aesthetic principles, artistic expressions, and cultural values in Eastern societies?",
    "options": [
      "A. Eastern Aesthetics",
      "B. Oriental Studies",
      "C. Asian Aesthetics",
      "D. Eastern Humanities"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 92
  },
  {
    "question": "Which term refers to the traditional Eastern art form that focuses on creating harmonious landscapes, often featuring elements such as rocks, water, plants, and architecture?",
    "options": [
      "A. Bonsai",
      "B. Ikebana",
      "C. Zen Garden",
      "D. Koi Pond"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 93
  },
  {
    "question": "In Vietnamese culture, which concept emphasizes the appreciation and cultivation of aesthetic principles, often applied in art, architecture, and daily life?",
    "options": [
      "A. Moral conduct",
      "B. Harmony",
      "C. Traditional motifs",
      "D. Natural beauty"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 94
  },
  {
    "question": "In the traditional art of Vietnam, which element is often regarded as a symbol of nobility and grandeur, commonly appearing in sculptures and interior decorations?",
    "options": [
      "A. Lotus flower",
      "B. Human figures",
      "C. Dragon",
      "D. Rice grains"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 95
  },
  {
    "question": "In the aesthetic philosophy of the Vietnamese people, which factor is often regarded as an expression of subtlety and contrast, commonly found in architecture and interior decoration?(073-356-8678)",
    "options": [
      "A. Harmony",
      "B. Bright colors",
      "C. Richness and beauty",
      "D. Diversity in forms"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 96
  },
  {
    "question": "Which philosophical system heavily influenced the aesthetic theory in traditional Chinese art?",
    "options": [
      "A. Confucianism",
      "B. Daoism",
      "C. Buddhism",
      "D. Buddhism, Daoism and Confucianism"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 97
  },
  {
    "question": "What does the concept of \"wu wei/Vovi\" in Daoist philosophy, as advocated by Laozi, imply?",
    "options": [
      "A. Harmony with society",
      "B. Freedom of thought",
      "C. Compliance with the laws of nature",
      "D. Cultural advancement"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 98
  },
  {
    "question": "In the history of Western painting, which style emerged later, characterized by non-representational and departure from Realism?",
    "options": [
      "A. Renaissance",
      "B. Baroque",
      "C. Realism",
      "D. Post-Impressionism"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 99
  },
  {
    "question": "Which painting method is considered the painting method of Chinese painting and influences both the painter and the viewer, consisting of 6 methods and 24 techniques?",
    "options": [
      "A. Ink-wash",
      "B. Painting method",
      "C. Six Principles of Chinese painting",
      "D. EaStern Painting"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 100
  },
  {
    "question": "Who is the author of the \" Six Principlesof Chinese painting\"which is considered a foundational document for the study of Chinese painting theory?",
    "options": [
      "A. Xie He",
      "B. William Acker",
      "C. Alexander C. Soper",
      "D. Nam Te"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 101
  },
  {
    "question": "Which approach to determining the meaning of a literary work does Jerrold Levinson advocate for?",
    "options": [
      "A. Word-sequence meaning",
      "B. Utterer's meaning",
      "C. Author's intention",
      "D. Utterance meaning"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 102
  },
  {
    "question": "Champa was formed on the basis of the development of the ... culture along with strong assimilation of major cultures (India, China, Dai Viet, Oc Eo - Funan, Southeast Asia).",
    "options": [
      "A. Oc Eo",
      "B. Phu Nam",
      "C. Sa Huynh",
      "D. Đong Son"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 103
  },
  {
    "question": "Why is it important to read and analyze future forecasts?",
    "options": [
      "A. To anticipate future events and trends",
      "B. To rely solely on predictions without planning",
      "C. To learn about past events",
      "D. To ignore current trends"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 104
  },
  {
    "question": "Regarding the interpretation of a work, what is the point of 'critical nihilism'?",
    "options": [
      "A. There are no correct interpretations of the work - because no work really means any particular thing.",
      "B. There is only one truly correct explanation.",
      "C. There are many correct explanations.",
      "D. None of these answers"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 105
  },
  {
    "question": "Regarding the interpretation of a work, what is the point of ‘critical monism’?",
    "options": [
      "A. There are no correct interpretations of the work – because no work really means any particular thing.",
      "B. There is one truly correct interpretation",
      "C. There are many correct explanations.",
      "D. None of these answers"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 106
  },
  {
    "question": "The particular flamingos depicted below are the pair designed by Don Featherstone back in 1957?",
    "options": [
      "A. True",
      "B. False"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 107
  },
  {
    "question": "Does morality have anything to do with aesthetics?",
    "options": [
      "A. Yes",
      "B. No"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 108
  },
  {
    "question": "Who was the first to mention the term \"Aesthetic\" in the history?",
    "options": [
      "A. I . Kant",
      "B. A. Baumgarten",
      "C. Hegel",
      "D. Hume"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 109
  },
  {
    "question": "Who created this typical Greek sculpture depicting the beauty of the male body below?",
    "options": [
      "A. Myron",
      "B. Polydorus",
      "C. Praxiteles",
      "D. Polykleitos"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 110
  },
  {
    "question": "Fill in the blank with the correct words: In an early dialogue by Plato, Hippias Major, Socrates suggests, we might think of beauty as that which makes us feel joy through … and…?",
    "options": [
      "A. Smell & sound",
      "B. Sight & sound",
      "C. Smell & Sight",
      "D. Sound & Hearing"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 111
  },
  {
    "question": "Who suggested that the sense of beauty - grounded in such formal matters as proportion, harmony and order - is a sense peculiar to man, and which connects him to the gods ?",
    "options": [
      "A. Plato",
      "B. Aristotle",
      "C. I.Kant",
      "D. Hegel"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 112
  },
  {
    "question": "Fill in the blank with the correct words:St Thomas Aquinas, the most influential philosopher of the ... period.",
    "options": [
      "A. Ancient",
      "B. Medieval",
      "C. Renaissance",
      "D. Romantic"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 113
  },
  {
    "question": "Fill in the blank with the correct words: Marsilio Ficino argued that beauty could be found not only in the relations between things - ..., ... - but also in their ...",
    "options": [
      "A. Order- proportion- harmony",
      "B. Order- proportion- harmony- brilliance",
      "C. Brilliance- Harmony- order",
      "D. Proportion- Harmony- Brilliance"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 114
  },
  {
    "question": "Fill in the blank with the correct words: Leon Battista Alberti contends that beauty is found in ...",
    "options": [
      "A. Arts",
      "B. Ideas",
      "C. Nature",
      "D. Bible"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 115
  },
  {
    "question": "Who explicitly places the beauty of art above that of nature?",
    "options": [
      "A. Plato",
      "B. Aristotle",
      "C. I. Kant",
      "D. Hegel"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 116
  },
  {
    "question": "..., a painting style characterized by its visible brush strokes, its emphasis on light, and its attempts to portray movement.",
    "options": [
      "A. Pop art",
      "B. Cubism",
      "C. Abstractionism",
      "D. Impressionism"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 117
  },
  {
    "question": "Who produced the most well-known formalist theory of art?",
    "options": [
      "A. Cezanne",
      "B. Man Ray",
      "C. Clive Bell",
      "D. Roger Fry"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 118
  },
  {
    "question": "Name the exhibition in 1915, Russian artist Kasimir Malevich contributed thirty-nine paintings to the exhibition in the Dobychina Gallery, Russia's leading private commercial gallery.",
    "options": [
      "A. '0,10' ('Zero-Ten')",
      "B. The Last Futurist Exhibition'",
      "C. Les Demoiselles d'Avignon",
      "D. Black Square"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 119
  },
  {
    "question": "In his dialogue the Laws, Plato suggests that beauty is found in certain ..., ... and ...",
    "options": [
      "A. Order- Regularity",
      "B. Harmonies- Order- Regularity.",
      "C. Order- Proportions- Regularity.",
      "D. Proportions- Harmonies- Order"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 120
  },
  {
    "question": "St Thomas Aquinas suggested that beauty is solely a matter of three qualities: a thing's ..., its ... and its ....",
    "options": [
      "A. proportion or harmony",
      "B. proportion or harmony- integrity or perfection",
      "C. proportion or harmony- integrity or perfection- brightness or clarity"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 121
  },
  {
    "question": "In 2008, actress Scarlett Johansson released her first studio album, Anywhere I Lay My Head, composed almost entirely of ...cover songs.",
    "options": [
      "A. Rolling Stone",
      "B. Tom Waits",
      "C. John Lee Hooker",
      "D. Johnny Depp"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 122
  },
  {
    "question": "Roger Scruton argues that accurately reporting at least some of a work's aesthetic features depends upon actually experiencing that work for another reason.",
    "options": [
      "A. Kasimir Malevic",
      "B. Pablo Picasso",
      "C. Roger Scruton",
      "D. Plato"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 123
  },
  {
    "question": "Walton argues that, in almost all cases, one of the latter .....conditions will trump the others. It would be strange, for instance, to suggest that a work belongs to a category with which its artist was unfamiliar.",
    "options": [
      "A. One",
      "B. Two",
      "C. Three",
      "D. Four"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 124
  },
  {
    "question": "Fill in the blank: Russian artist Kasimir Malevich outgrew the movement he himself had founded, and created its successor, ....",
    "options": [
      "A. Futurism",
      "B. Cubism",
      "C. Suprematism",
      "D. Romanticsm"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 125
  },
  {
    "question": "What all of these ..... would seem to agree about is that artistic value is ultimately grounded - one way or another - in aesthetic value.",
    "options": [
      "A. Philosophers",
      "B. Artist",
      "C. Worker",
      "D. Musician"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 126
  },
  {
    "question": "Malcolm Budd argues that the difference between ..... is not merely one of degree, but one of kind.",
    "options": [
      "A. the intrinsic value of art",
      "B. its instrumental values",
      "C. the intrinsic value of art and its instrumental values",
      "D. None of above"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 127
  },
  {
    "question": "in Beardsley's view, something is good art if and to the degree that it does satisfy this interest. According to Beardsley's theory, a work's artistic value depends solely upon its aesthetic value, and a thing's aesthetic value is simply its capacity to produce (under suitable conditions) aesthetic enjoyment, a particular sort of pleasure. This pleasure, he argues, arises from three 'regional qualities' of what is seen, heard, or otherwise apprehended: its ..., its ..... and its .......",
    "options": [
      "A. Unity",
      "B. Unity- intensity",
      "C. Unity- intensity- complexity"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 128
  },
  {
    "question": "In 2015, Willem de Kooning's 1955 abstract expressionist painting Interchange set an auction record, selling for ..... million.",
    "options": [
      "A. $300",
      "B. $400",
      "C. $500",
      "D. $600"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 129
  },
  {
    "question": "In 1935, St Louis-born photographer Walker Evans was hired by the US federal government's Resettlement Administration (RA) and Farm Security Administration (FSA) to document the effects of the Great Depression in America. Along with writer James Agee, Evans stayed with three families in rural Alabama, including a family of sharecroppers, the Burroughs, capturing images of them, their living conditions, and their day-to-day lives. A number of the photographs Evans took were published in Evans's and Agee's 1941 book, ...., swiftly renowned for its journalistic innovation.",
    "options": [
      "A. Let Us know",
      "B. Let Us go",
      "C. Let Us Adore you",
      "D. Let Us Now Praise Famous Men"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 130
  },
  {
    "question": "In 1981, ... re-photographed a number of the images in First and Last, including Evans's Alabama Tenant Farmer Wife - a portrait of Allie Mae Burroughs - titling her 're-photograph' of Evans's iconic image After Walker Evans: 4.",
    "options": [
      "A. Walker Evans",
      "B. James Agee",
      "C. Sherrie Levine",
      "D. Michael Mandiberg"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 131
  },
  {
    "question": "In his book, ... Richard Wollheim considers what he calls the 'physical-object hypothesis': the view that artworks simply are physical objects",
    "options": [
      "A. Love and Its Objects",
      "B. Aesthetics and Its Objects",
      "C. Beauty and Its Objects",
      "D. Art and Its Objects"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 132
  },
  {
    "question": "In his book Language of Art, Nelson Goodman introduces the terms '.....' and 'allographic' to determine what makes something a genuine instance of a given work",
    "options": [
      "A. Biographic",
      "B. Calligraphic",
      "C. Typographic",
      "D. Autographic"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 133
  },
  {
    "question": "Collingwood has directly or indirectly inspired several ontological theories, including those of ....., who argue that works of art are actions.",
    "options": [
      "A. Gregory Currie",
      "B. David Davies",
      "C. Gregory Currie and David Davies"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 134
  },
  {
    "question": "Collingwood says, is that of a mental activity or object - the self-reflective clarification of the artist in producing the painting, sculpture, novel or other art-object. This physical product ideally serves as a conduit between ..... and the work itself, this internal state of the artist.",
    "options": [
      "A. the object",
      "B. the artist",
      "C. the audience",
      "D. the world"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 135
  },
  {
    "question": "Like the paradox of fiction, the problem, of tragedy finds its roots in ancient ...",
    "options": [
      "A. Egypt",
      "B. Mesopotamia",
      "C. Greece",
      "D. China"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 136
  },
  {
    "question": "Aristotle wrote two works focused on issues in aesthetics: ... and ....",
    "options": [
      "A. The Tragedy - The comedy",
      "B. The Ion and the Republic",
      "C. The Rhetoric -the Poetics",
      "D. The Beauty - the Ugly"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 137
  },
  {
    "question": "In 1757, Who published 'Of Tragedy'? an essay looking to further explain how it is that audiences of dramatic tragedies feel pleasure as the direct result of feeling sorrow, terror and anxiety in response to the events depicted onstage",
    "options": [
      "A. David Hume",
      "B. Imanuel Kant",
      "C. Plato",
      "D. Aristotle"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 138
  },
  {
    "question": "When was \"The birth of tragedy\" born?",
    "options": [
      "A. 1872",
      "B. 1873",
      "C. 1874",
      "D. 1875"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 139
  },
  {
    "question": "In his 1973 review of the film, critic Roger Ebert gave The Exorcist four out of ... stars, calling it 'one of the best movies of its type ever made'",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 140
  },
  {
    "question": "The Exorcist was a cultural phenomenon. It remains the highest-grossing R-rated film of all time, and was nominated for ten Academy Awards, including Best Picture. Although it didn't win that highest award, it does have the honour of being the very first horror movie to be nominated for a Best Picture ...",
    "options": [
      "A. Oscar",
      "B. Tiff",
      "C. Cannes",
      "D. Golden globe awards"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 141
  },
  {
    "question": "The ancient ... , Nietzsche theorizes, lived a dichotomous existence, constantly pulled at by two opposite poles: the 'Apollonian' and its opposite, the 'Dionysian'",
    "options": [
      "A. Mesopotamian",
      "B. Egyptian",
      "C. Greeks",
      "D. China"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 142
  },
  {
    "question": "Carl Andre's 1969 installation, 144 Lead ...., still housed in New York's Museum of Modern Art, consists of 144 square lead tiles arranged in a 12-by-12-foot grid.",
    "options": [
      "A. Square",
      "B. Triangle",
      "C. Cube",
      "D. Round"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 143
  },
  {
    "question": "The intertwining of ... and ... goes back to Western philosophy's beginnings in ancient Greece, long before either had truly become its own discrete area of concern.",
    "options": [
      "A. Aesthetics-philosolhy",
      "B. Aesthetics- ethics",
      "C. Ethics- philosolhy",
      "D. Ethics- Love"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 144
  },
  {
    "question": "Outlawing poetry for its deleterious effects, the Republic is often cited as one of the first arguments for ..... of the arts",
    "options": [
      "A. Support",
      "B. Funding",
      "C. Censorship",
      "D. Praise"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 145
  },
  {
    "question": "A film like Leni Riefenstahl's ... released in 1935 and commissioned by Adolf Hitler, the film chronicles a four-day Nazi Party Congress in an effort to promote the Nazi philosophy.",
    "options": [
      "A. Helena",
      "B. Doctor Stranger",
      "C. Triumph of the Will",
      "D. Ghost in the shell"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 146
  },
  {
    "question": "When was the novel The Good Earth published?",
    "options": [
      "A. 1933",
      "B. 1932",
      "C. 1934",
      "D. 1935"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 147
  },
  {
    "question": "Who was the director of a film The good earth (1937)?",
    "options": [
      "A. Luise Rainer",
      "B. Paul Muni",
      "C. Tilly Losch",
      "D. Sidney Franklin."
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 148
  },
  {
    "question": "Although blackface - in which white actors are made up to play black characters - is largely a practice of the past, '.....' has had surprising endurance",
    "options": [
      "A. blackface",
      "B. whiteface",
      "C. yellowface",
      "D. brownface"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 149
  },
  {
    "question": "In 1941, Hattie McDaniel became the first black performer to win an Academy Award, taking the Best Supporting Actress Oscar for her role as Mammy, the house servant in .....",
    "options": [
      "A. The Green Hornet",
      "B. Gone With the Wind",
      "C. Ghost in the Shell",
      "D. Doctor Strange"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 150
  },
  {
    "question": "The 2017 film Ghost in the Shell is also based on a comic-book series, and similarly features a white performer ...... playing the role of what is an Asian character in the source material (Motoko Kusanagi).",
    "options": [
      "A. Scarlett Johansson",
      "B. Tilda Swinton",
      "C. Doctor Strange",
      "D. Ancient One"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 151
  },
  {
    "question": "What kind of fish is unofficially the World's Ugliest Animal, a dubious honor granted in 2013 by the Ugly Animal Preservation Society, which adopted that as its official mascot in an effort to raise the profile 'of some of Mother Nature's more aesthetically challenged children?",
    "options": [
      "A. The starfish",
      "B. The goldenfish",
      "C. The blobfish",
      "D. The crawfish"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 152
  },
  {
    "question": "The ancient Greek philosopher Pythagoras believed that beauty arose from mathematical harmony, order and regularity. In this way, Pythagoras and his followers did not distinguish between ...",
    "options": [
      "A. the beauty of nature",
      "B. the beauty of art",
      "C. the beauty of art and the beauty of nature"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 153
  },
  {
    "question": "During the ........ period, Christian philosophers worked to meld the philosophical principles of the classical period with the tenets of Christianity",
    "options": [
      "A. Rococo",
      "B. Baroque",
      "C. Renaissance",
      "D. Medieval"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 154
  },
  {
    "question": "Fill in the blank with the correct words: ...was a disciple of Socrates whose cornerstone of thought was his theory of Forms, in which there was another world of perfection.",
    "options": [
      "A. Heraklite",
      "B. Plato",
      "C. Aristotle",
      "D. I.Kant"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 155
  },
  {
    "question": "Fill in the blank with the correct words: Professor Robert Thomson once suggested: 'As iconic emblems of kitsch, there are two pillars of cheesy campiness in the American pantheon. One is.... and ....?",
    "options": [
      "A. Pink flamingos- Roses",
      "B. The velvet Elvis- Bible",
      "C. Roses- Bible",
      "D. The velvet Elvis - Pink flamingos"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 156
  },
  {
    "question": "Traditionally, which term tends to be regarded as the central concept which these others depend?",
    "options": [
      "A. Sublime",
      "B. Comedy",
      "C. Beauty",
      "D. Ugliness"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 157
  },
  {
    "question": "Fill in the blank with the correct words: ....is Plato's best-known work, and has proven to be one of the world's most influential works of philosophy and political theory, both intellectually and historically.",
    "options": [
      "A. Aesthetic",
      "B. Metaphysics",
      "C. Republic",
      "D. Phenomenology of spirit"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 158
  },
  {
    "question": "Fill in the blank with the correct words: Bonaventure argues that the world is beautiful because its ...?",
    "options": [
      "A. God",
      "B. Artist",
      "C. Creator",
      "D. -self"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 159
  },
  {
    "question": "Fill in the blank with the correct words: Leon Battista Alberti, was an Italian Renaissance humanist author, artist, architect, poet, priest, linguist, philosopher, and cryptographer; he epitomized the Renaissance Man. Alberti authored three groundbreaking treatises: ...., ..., ...?",
    "options": [
      "A. On Painting, On Poem, On Literature",
      "B. On Sculpture, On Music, On Poem",
      "C. On Architecture, On Literature, On Poem",
      "D. On Painting, On Sculpture and On Architecture"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 160
  },
  {
    "question": "Following the Impressionists in the late nineteenth century were the....., a loose collection of painters variously inspired by the Impressionists.",
    "options": [
      "A. Fauvism",
      "B. Post-Impressionists",
      "C. Expressionism",
      "D. Cubism"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 161
  },
  {
    "question": "Who introduced the technique of Pointillism, replacing brush strokes with countless dots of color?",
    "options": [
      "A. George Seurat",
      "B. Monet",
      "C. Manet",
      "D. Picasso"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 162
  },
  {
    "question": "Baumgarten's notion of 'aesthetic' as grounded in sensory experience - particularly.... And. ..... experience.",
    "options": [
      "A. Reading- Writing",
      "B. Auditory- Kinesthetic",
      "C. Kinesthetic- visual",
      "D. Visual - auditory"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 163
  },
  {
    "question": "St Bonaventure argued that beauty we find in art and nature comes from the beauty of ....., a notion he borrowed from an earlier philosopher, St Augustine.",
    "options": [
      "A. Nature",
      "B. God",
      "C. Love",
      "D. Human"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 164
  },
  {
    "question": "In the Renaissance, Marsilio Ficino followed Aquinas by arguing that beauty was found in ..., ... and ....",
    "options": [
      "A. Order",
      "B. Order- proportion",
      "C. Order- proportion- harmony"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 165
  },
  {
    "question": "In the eighteenth century, who argued that beauty would be found in 'uniformity amidst variety ?",
    "options": [
      "A. Imanuel Kant",
      "B. Francis Hutcheson",
      "C. Marsilio Ficino",
      "D. St Thomas Aquinas"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 166
  },
  {
    "question": "Pettit, in speaking of suitable positioning, is drawing on a sort of contextualism, suggesting that seeing ..... qualities depend upon the context in which the item is experienced and perhaps on some knowledge of the viewer.",
    "options": [
      "A. Aesthetic",
      "B. Music",
      "C. Dance",
      "D. Drawing"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 167
  },
  {
    "question": "When was the exhibition in the Dobychina Gallery, Russia's leading private commercial gallery, Subtitled \"The Last Futurist Exhibition\", '0,10' is perhaps better known for its role as the first Suprematist exhibition be held?",
    "options": [
      "A. 1915",
      "B. 1916",
      "C. 1917",
      "D. 1918"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 168
  },
  {
    "question": "Who takes Danto's observation a step further, arguing that the aesthetic qualities that work actually possess are those that are found in it when it is perceived in the right art category?",
    "options": [
      "A. Kendall Walton",
      "B. Malcolm Budd",
      "C. Joel Feinberg",
      "D. Robert Stecker"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 169
  },
  {
    "question": "........., for one, has challenged Budd's claim that to value something as art is to value it non-instrumentally.",
    "options": [
      "A. Malcolm Budd",
      "B. Joel Feinberg",
      "C. Monroe Beardsley",
      "D. Robert Stecker"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 170
  },
  {
    "question": "Contextualists argue that a .....may not - and perhaps cannot - have the same aesthetic properties and thus value as the original, because each was created by distinct persons under distinct conditions of creation.",
    "options": [
      "A. Object",
      "B. Artwork",
      "C. Real",
      "D. Forgery"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 171
  },
  {
    "question": "In ....., First and Last, a catalog of 219 of Evans's 20,000 photographs, was published.",
    "options": [
      "A. 1978",
      "B. 1979",
      "C. 1980",
      "D. 1981"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 172
  },
  {
    "question": "In 2001, Michael Mandiberg scanned the same photographs from First and Last and posted them to his website, AfterSherrieLevine.com. If you visit the site, you can print out a high-resolution copy of the image originally taken by Evans - now titled ... (AfterSherrieLevine.com/2.jpg) - along with a certificate of authenticity",
    "options": [
      "A. After Walker Evans: 4.",
      "B. Untitled",
      "C. Alabama Tenant Farmer Wife",
      "D. After Sherrie Levine"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 173
  },
  {
    "question": "In 2006, Lucasfilm announced that, in creating the 1997 Special Edition, it had to permanently alter the original negatives for the ... version of Star Wars.",
    "options": [
      "A. 1977",
      "B. 1978",
      "C. 1979",
      "D. 1980"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 174
  },
  {
    "question": "Collingwood's view seems to avoid the perplexities of .....objects: there is not a type with multiple tokens, and some strange relation between them. Rather, each printing of a book, copy of a film or print of a photograph is simply something that offers the same access to the work itself.",
    "options": [
      "A. Romantic",
      "B. Abstract",
      "C. Popular",
      "D. Mini"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 175
  },
  {
    "question": "Collingwood's theory not only attempts to distinguish between art and ...., but also offers an ontological view of art.",
    "options": [
      "A. art",
      "B. on-art",
      "C. no-art",
      "D. non-art"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 176
  },
  {
    "question": "In 1999, Entertainment Weekly released its ranking of the 'Scariest Movies of All Time,' and .... Topped the list - ahead of Alien, ahead of The Shining, ahead of Jaws.",
    "options": [
      "A. Titanic",
      "B. The Exorcist",
      "C. Docter strange",
      "D. Ghost in the shell"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 177
  },
  {
    "question": "Fill the blank; In ...., David Hume published 'Of Tragedy'.",
    "options": [
      "A. 1757",
      "B. 1758",
      "C. 1759",
      "D. 1760"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 178
  },
  {
    "question": "What is tragedy according to Nietzsche?",
    "options": [
      "A. The Birth of Tragedy",
      "B. Tragedy",
      "C. Of Tragedy",
      "D. The dead of Tragedy"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 179
  },
  {
    "question": "In 1998, for its twenty-fifth anniversary, The Exorcist was re-released in cinemas as '...'.",
    "options": [
      "A. The Exorcist 2",
      "B. The cultural phenomenon.",
      "C. The Scariest Movie of All Time",
      "D. The Version You've Never Seen"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 180
  },
  {
    "question": "Originally installed in Denmark's Trapholt Art Museum, ..... consists of ten water-filled Moulinex-Optiblend 2000 blenders, each containing a live goldfish",
    "options": [
      "A. Maria",
      "B. Helena",
      "C. Anna",
      "D. Karla"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 181
  },
  {
    "question": "In the ..... , his most famous work, Plato discusses how the ideal city-state might be designed. The sort of utopian city that Plato has in mind is one in which each individual has one (and only one) function, and performs that function in harmony with those of others",
    "options": [
      "A. Republic",
      "B. Critique of pure reason",
      "C. Phenomenology of spirit",
      "D. Metapphysics"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 182
  },
  {
    "question": "Before Plato, philosophers were wrestling with the relationship between 'beauty' and the '...'.",
    "options": [
      "A. Sublime",
      "B. Ugly",
      "C. Tragedy",
      "D. Good"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 183
  },
  {
    "question": "We looked at David Hume's theory of taste, in which he argues that the critic's job is to distance himself from his own sentimentality, to overcome his own prejudices and to become, as much as possible, a 'man in ...'",
    "options": [
      "A. Special",
      "B. Nomarl",
      "C. General",
      "D. Loyal"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 184
  },
  {
    "question": "On Susan Feagin's view, we can distinguish between 'direct- responses' and '..... responses'.",
    "options": [
      "A. Alpha-",
      "B. Beta-",
      "C. Gama-",
      "D. Meta-"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 185
  },
  {
    "question": "In 1932, who published novel The Good Earth, the sprawling story of a Chinese farmer, his new wife and their family in early twentieth-century revolutionary China?",
    "options": [
      "A. Pearl S. Buck",
      "B. Anna May Wong",
      "C. Sidney Franklin",
      "D. J.K. Rowling"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 186
  },
  {
    "question": "In more recent years, the convention of yellowface has been largely (though not entirely) replaced with another controversial practice: what critics call '......' - generally, the casting of white actors to play traditionally non-white roles (usually without being made up to appear non-white)",
    "options": [
      "A. Yellowwashing",
      "B. Blackwashing",
      "C. Whitewashing",
      "D. Brownwashing"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 187
  },
  {
    "question": "...... famously entered the American public consciousness in 1966 playing the role of Kato in the short-lived TV action series The Green Hornet.",
    "options": [
      "A. Châu Kiệt Luân",
      "B. Seth Rogen",
      "C. Chistoph Waltz",
      "D. Bruce Lee"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 188
  },
  {
    "question": "Affectionately named 'Mr Blobby', the 285mm specimen was caught off the coast of New Zealand in 2003 by the crew of the RV Tangoroa, a deep-water scientific research vessel, named for the Māori god of the sea. Name of fish in this text?",
    "options": [
      "A. The kingfish",
      "B. The Archerfish",
      "C. The Hagfish",
      "D. The Blobfish"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 189
  },
  {
    "question": "During the second and first century bce, Hellenistic philosophers known as the Stoics took this line of thought a step further, suggesting that the world as a whole was beautiful, regarding nature as both art and ...., the universe as the most perfect work of art.",
    "options": [
      "A. Artist",
      "B. Sculpturer",
      "C. Architect",
      "D. Musician"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 190
  },
  {
    "question": "Emily Brady suggests, allow for aesthetic revelation - the realization of aesthetic truths. However, for such appreciation to be appro- priate, it must be both disinterested and of proper depth. As Brady puts it, we must ... well.",
    "options": [
      "A. Live",
      "B. Creative",
      "C. Imagine",
      "D. Think"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 191
  },
  {
    "question": "Nature, Kant contends, can also give rise to feelings of ..... - what we might think of as a pronounced awe: where something is sublime, it is quite literally awesome.",
    "options": [
      "A. the sublime",
      "B. the beauty",
      "C. the tragedy",
      "D. the ugly"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 192
  },
  {
    "question": "Regarding the interpretation of work, what is the point of 'critical pluralism'?",
    "options": [
      "A. good work allows for multiple interpretations, each of which has as much claim to being right as any other",
      "B. There are no correct interpretations of the work - because no work really means any particular thing.",
      "C. There are one correct interpretations of the work.",
      "D. None of these answers"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 193
  },
  {
    "question": "Fill in the blank :According to Kant why cannot genius be taught? Kant argues:.................",
    "options": [
      "A. Art does not follow determinate rules.",
      "B. Rules that can simply be explained to, and followed by, anyone else.",
      "C. All of these answers.",
      "D. None of these answers."
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 194
  },
  {
    "question": "An artist learns to create art by observing great beauty and practicing one's art, says Kant, but what are the aesthetic ideas on which the artist works?",
    "options": [
      "A. Intelligence",
      "B. Intuition",
      "C. determinate concepts",
      "D. All of these answers."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 195
  },
  {
    "question": "The upshot of the Romantic view, what does the artwork represent?",
    "options": [
      "A. The artwork represents something that exists in social life - but this can only be felt by the artist.",
      "B. Artworks embody something that exists within the audience - something we perceive thanks to the artist.",
      "C. None of these answers.",
      "D. Artworks embody something that exists within the artist - something that, because we lack his ort of genius, we depend on the artist to communicate to us."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 196
  },
  {
    "question": "Interpretation in art refers to the attribution of meaning to work. ... What aestheticism maintains that work's meaning is entirely determined by linguistic and literary conventions, thereby rejecting the relevance of the author's intention?",
    "options": [
      "A. Anti-intentionalism.",
      "B. The Romantics",
      "C. Post-structuralism",
      "D. Intentionalism revisited"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 197
  },
  {
    "question": "Who compares this 'internal sense' to our external senses of sight and hearing?",
    "options": [
      "A. Hutcheson",
      "B. Alberti",
      "C. Shaftesbury",
      "D. Marsilio Ficino"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 198
  },
  {
    "question": "Fill in the blank :Eliot writes, 'Honest criticism and sensitive appreciation is directed not upon the.............'",
    "options": [
      "A. poet but upon the poetry",
      "B. poet but to the reader",
      "C. reader but to the poetry.",
      "D. None of these answers."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 199
  },
  {
    "question": "Poststructuralism focuses on who's role in creating meaning, thus gaving rise to reader-response criticism, which operates according to the view that literature should be thought of as something of performance art, with each reader as unique performer?",
    "options": [
      "A. reader",
      "B. poet",
      "C. audient",
      "D. None of these answers."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 200
  },
  {
    "question": "While Waits may interpret 'Last Leaf ' as being about tree, Terry Gross and others are perfectly free to interpret it as song about what?",
    "options": [
      "A. death and survival",
      "B. death",
      "C. survival",
      "D. None of these answers."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 201
  },
  {
    "question": "Fill in the blank : In Plato's early dialogue the Hippias Aesthetic Properties and Evaluation Major, Socrates suggests that beauty is that which makes us feel joy .........- that beauty is particular sort of pleasure producing thing.",
    "options": [
      "A. through sight and sound",
      "B. through sight",
      "C. through sound",
      "D. None of these answers."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 202
  },
  {
    "question": "In the 15th century, who argued that judgements of beauty depend upon an innate sense of beauty in man - natural ability to recognize it and natural tendency to be pleased by it?",
    "options": [
      "A. Leon BattistAlberti",
      "B. St Thomas Aquinas",
      "C. Marsilio Ficino",
      "D. None of these answers."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 203
  },
  {
    "question": "Fill in the blank : By suggesting that every man has this sense, and in arguing for an inviolate basis to beauty, Alberti concludes that there simply cannot be reasonable ............about beauty.",
    "options": [
      "A. disagreement",
      "B. agreement",
      "C. None of these answers.",
      "D. All of these answers."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 204
  },
  {
    "question": "The term \"suspension of disbelief\" was introduced by poet Samuel Taylor Coleridge in which of his works published in 1817?",
    "options": [
      "A. Biographia Literaria",
      "B. Republic",
      "C. King Lear",
      "D. Iliad"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 205
  },
  {
    "question": "What can marks be said to seem 'angry' about? And we can similarly describe a soft and flowing line as 'calm', a jagged and rigid one as 'agitated' or 'pensive', and so on",
    "options": [
      "A. shape",
      "B. form",
      "C. type",
      "D. rhythm"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 206
  },
  {
    "question": "If you are watching The Exorcist, you likely hold another set of beliefs that Regan MacNeil has been possessed by a demon, that her mother is overwhelmed with grief and so on. These are beliefs about the story being told, and we probably want to say these are true beliefs as well (in the way that the priests all make it out of the MacNeil house alive would be a .......... belief). Call these 'second-order' beliefs.",
    "options": [
      "A. false",
      "B. true",
      "C. unclear",
      "D. None of the answer"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 207
  },
  {
    "question": "It is worth noticing that in Beardsley's view, ... of a work of art arises entirely from the work's formal qualities.",
    "options": [
      "A. the value",
      "B. the price",
      "C. the ideas",
      "D. the date"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 208
  },
  {
    "question": "Who argues that although we value art for something it gives us, we should nevertheless distinguish this sort of value from instrumental value, broadly speaking?",
    "options": [
      "A. Malcolm Budd",
      "B. Joel Feigenberg",
      "C. Monroe Beardsley",
      "D. Willem de Kooning"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 209
  },
  {
    "question": "Among the many views that were considered, beauty and the........ were almost always tied together, treated as related in some way, if only on the grounds that each involves judgement.",
    "options": [
      "A. good - aesthetics and ethics",
      "B. true - good and ethics",
      "C. good - aesthetics",
      "D. aesthetics - ethics - true"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 210
  },
  {
    "question": "In the 1950s, psychologist Fredric Wertham suggested that comic books were a major cause of what condition in juveniles? He corroborated that claim before the US Senate, calling for their censorship.",
    "options": [
      "A. delinquency",
      "B. excitement",
      "C. violence",
      "D. dementia"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 211
  },
  {
    "question": "How many versions of 'Institutional Theory of Art' that produced by George Dickie?",
    "options": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 212
  },
  {
    "question": "You were well aware that 'In the Gloaming' was a fictional story when you started reading it. So who are you sad about? It seems thoroughly irrational to be sad about someone who you are fully aware never existed. In recent years, what is this problem called? and was reintroduced by British philosopher Colin Radford.",
    "options": [
      "A. 'paradox of fiction'",
      "B. 'the tragedy of the novel'",
      "C. 'Literal Interpretation'",
      "D. 'Realism in Art'"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 213
  },
  {
    "question": "Unlike articles of nature, Hegel suggests, a work of art is apprehended on a ..... or spiritual plane",
    "options": [
      "A. Physical",
      "B. Mental",
      "C. Emotinal",
      "D. Intellectual"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 214
  },
  {
    "question": "Fill in the blank with the correct words: ... praised the imitative arts for their imitation and contends that all of us are born both with the instinct to imitate and the instinct to enjoy works of imitation.",
    "options": [
      "A. Heraklitus",
      "B. Socrates",
      "C. Plato",
      "D. Aristotle"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 215
  },
  {
    "question": "Poetry, including theatre, allows us to vent and so purge our emotions of pity and fear, a phenomenon Aristotle called ...",
    "options": [
      "A. Comedy",
      "B. Tragedy",
      "C. Beauty",
      "D. Catharsis"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 216
  },
  {
    "question": "In ..... First and Last, a catalogue of 219 of Evans's 20,000 photographs, was published",
    "options": [
      "A. 1978",
      "B. 1979",
      "C. 1980",
      "D. 1981"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 217
  },
  {
    "question": "What causes the paradox in the novel to arise?",
    "options": [
      "A. The paradox arises from a conflict in our beliefs, not a conflict between our beliefs and facts",
      "B. paradox arises from acceptance of our beliefs, not conflict between our beliefs and our truth.",
      "C. the paradox arises from a failure to accept our beliefs, not a conflict between our beliefs and our truth.",
      "D. None of these answer"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 218
  },
  {
    "question": "Anthony Ashley Cooper,3rd Earl of Shaftesbury said: \"The painting and the music invite us to do what we would seldom do in ordinary life - pay attention only to what we are ..... , and ignore everything else.\"",
    "options": [
      "A. Tasting or touching",
      "B. Looking or smelling",
      "C. seeing or hearing",
      "D. Loving or understanding"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 219
  },
  {
    "question": "Who painted \"Nude Descending a Staircase\", No. 2 (1912)?",
    "options": [
      "A. Hans Arp",
      "B. Marcel Duchamp",
      "C. Salvador Dalí",
      "D. Man Ray"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 220
  },
  {
    "question": "Why is the audience, as well as Ion himself, overcome with emotion during the recitation of the Trojan War stories, even though the events took place centuries ago and everyone already knows the outcome?",
    "options": [
      "A. The audience is unfamiliar with the story, creating suspense and surprise.",
      "B. Ion's emotional portrayal adds a new perspective to the well-known story.",
      "C. The events of the Trojan War hold intrinsic emotional power that transcends time and familiarity.",
      "D. Socrates suggests that Ion is not actually emotional; it's a theatrical performance."
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 221
  },
  {
    "question": "Who searched for definitions of good, truth, justice and beauty?",
    "options": [
      "A. Socrates",
      "B. Heraklite",
      "C. Plato",
      "D. Aristotle"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 222
  },
  {
    "question": "In the history of aesthetics and the philosophy of art tends to go overlooked by contemporary philoso- phers except......?",
    "options": [
      "A. Plato",
      "B. Aristotle",
      "C. Kant",
      "D. Plato, Aristotle and Kant"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 223
  },
  {
    "question": "Who is considered by many to be the father of Western philosophy?",
    "options": [
      "A. Heraklitus",
      "B. Pythagoras",
      "C. Socrates",
      "D. Plato"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 224
  },
  {
    "question": "emotions of pity and fear",
    "options": [
      "B. phenomenon was called by Baumgarten allows us to vent and so purge our emotions of pity and fear",
      "C. phenomenon was called by Plato allows us to vent and so purge our emotions of pity and fear",
      "D. phenomenon was called by Kant allows us to vent and so purge our emotions of pity and fear"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 225
  },
  {
    "question": "In Marvel's 2016 superhero movie Doctor Strange, for example, the part of the Ancient One is played by Tilda Swinton. In the film, the Ancient One is a ..... sorcerer, and so it may not be surprising that the actress playing her is white",
    "options": [
      "A. Tibetan",
      "B. Asian",
      "C. Celtic",
      "D. Greek"
    ],
    "answer": "C",
    "multiAnswer": false,
    "id": 226
  },
  {
    "question": "In the eighteenth century, however, the practice of landscape design turned to the ' ..... ' style, an idealized version of wild nature, with properties looking on the one hand natural and accidentally placed, and, on the other hand, polished.",
    "options": [
      "A. France garden",
      "B. English garden",
      "C. Spanish garden",
      "D. Italia garden"
    ],
    "answer": "B",
    "multiAnswer": false,
    "id": 227
  },
  {
    "question": "The official logo of the World Wildlife Fund is an adorable",
    "options": [
      "A. Eagle",
      "B. Cat",
      "C. Dog",
      "D. Panda"
    ],
    "answer": "D",
    "multiAnswer": false,
    "id": 228
  },
  {
    "question": "Schaper argues that first-order beliefs are about our...., and that second-order beliefs are about the world of the .....",
    "options": [
      "A. world, story",
      "B. story, world",
      "C. None of the answer",
      "D. world, life"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 229
  },
  {
    "question": "It seems reasonable, to describe a piece of music as '....' just in case it excites listeners, a film as '....' just in case it frightens viewers, or a landscape painting as '....' only if it calms those who look at it.",
    "options": [
      "A. exciting, scary, calming",
      "B. happy, sad, calming",
      "C. happy, scary, thrilling",
      "D. exciting, scary, thrilling"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 230
  },
  {
    "question": "What is \"Baker-Miller pink\" supposed to represent?",
    "options": [
      "A. 'calm' colour",
      "B. 'creative' colour",
      "C. 'dynamic' colour",
      "D. 'romantic' colour"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 231
  },
  {
    "question": "Schaper suggests that the term 'suspension of disbelief is actually a misnomer and that when dealing with fictional narratives, what are we to do?",
    "options": [
      "A. we do not suspend or put aside any beliefs; rather, we compound beliefs.",
      "B. we suspend or dismiss all beliefs",
      "C. we suspend or put aside any beliefs; rather, we compound beliefs."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 232
  },
  {
    "question": "Shaftesbury argues: What is the \"inward eye'\"?",
    "options": [
      "A. This 'inward eye' applies to both the ethical and the aesthetic, distinguishing harmony and proportion from their opposites in both arenas.",
      "B. This 'inward eye' applies to both the beauty and the aesthetic, distinguishing harmony and proportion from their opposites in both arenas.",
      "C. This 'inward eye' applies to both the ethical and the emotion, distinguishing harmony and proportion from their opposites in both arenas.",
      "D. None of these answer."
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 233
  },
  {
    "question": "Aesthetics and ethics each deal with sorts of value. We evaluate works of art, non-artefacts and certainly each other .........; and we evaluate actions, events and persons.....",
    "options": [
      "A. aesthetically, ethically",
      "B. ethically, aesthetically,",
      "C. aesthetically, emotionally",
      "D. Emotionally, ethically"
    ],
    "answer": "A",
    "multiAnswer": false,
    "id": 234
  }
];
