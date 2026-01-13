const mongoose = require('mongoose');
const Question = require('./models/Question');

const MONGO_URI = 'mongodb+srv://harnoorkaur16165:harnoorkaur1615@cluster0.f8jrbpk.mongodb.net/gate-scraper';

// Array of questions to add
const questions = [
  
   {
  "question_id": "GATE2024_GA_Q01",
  "year": 2024,
  "subject": "General Aptitude",
  "topic": "Vocabulary",
  "question_text": "If ‘→’ denotes increasing order of intensity, then the meaning of the words [sick → infirm → moribund] is analogous to [silly → _______ → daft]. Which one of the given options is appropriate to fill the blank?",
  "options": [
    "frown",
    "fawn",
    "vein",
    "vain"
  ],
  "correct_answer": "vain",
  "marks": 1,
  "difficulty": "easy"
},
{
  "question_id": "GATE2024_GA_Q02",
  "year": 2024,
  "subject": "General Aptitude",
  "topic": "Spatial Reasoning",
  "question_text": "The 15 parts of the given figure are to be painted such that no two adjacent parts with shared boundaries (excluding corners) have the same color. The minimum number of colors required is",
  "options": [
    "4",
    "3",
    "5",
    "6"
  ],
  "correct_answer": "4",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_GA_Q03",
  "year": 2024,
  "subject": "General Aptitude",
  "topic": "Number Theory",
  "question_text": "How many 4-digit positive integers divisible by 3 can be formed using only the digits {1, 3, 4, 6, 7}, such that no digit appears more than once in a number?",
  "options": [
    "24",
    "48",
    "72",
    "12"
  ],
  "correct_answer": "48",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_GA_Q04",
  "year": 2024,
  "subject": "General Aptitude",
  "topic": "Series",
  "question_text": "The sum of the following infinite series is: 2 + 1/2 + 1/3 + 1/4 + 1/8 + 1/9 + 1/16 + 1/27 + ⋯",
  "options": [
    "11/3",
    "7/2",
    "13/4",
    "9/2"
  ],
  "correct_answer": "7/2",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_GA_Q05",
  "year": 2024,
  "subject": "General Aptitude",
  "topic": "Data Interpretation",
  "question_text": "In an election, the share of valid votes received by the four candidates A, B, C, and D is represented by the given pie chart. The total number of votes cast in the election were 1,15,000, out of which 5,000 were invalid. Based on the data provided, the total number of valid votes received by the candidates B and C is",
  "options": [
    "45,000",
    "49,500",
    "51,750",
    "54,000"
  ],
  "correct_answer": "49,500",
  "marks": 1,
  "difficulty": "easy"
},
{
  "question_id": "GATE2024_GA_Q06",
  "year": 2024,
  "subject": "General Aptitude",
  "topic": "Reading Comprehension",
  "question_text": "Thousands of years ago, some people began dairy farming. This coincided with a number of mutations in a particular gene that resulted in these people developing the ability to digest dairy milk. Based on the given passage, which of the following can be inferred?",
  "options": [
    "All human beings can digest dairy milk",
    "No human being can digest dairy milk",
    "Digestion of dairy milk is essential for human beings",
    "In human beings, digestion of dairy milk resulted from a mutated gene"
  ],
  "correct_answer": "In human beings, digestion of dairy milk resulted from a mutated gene",
  "marks": 1,
  "difficulty": "easy"
},
{
  "question_id": "GATE2024_GA_Q07",
  "year": 2024,
  "subject": "General Aptitude",
  "topic": "Probability",
  "question_text": "The probability of a boy or a girl being born is 1/2. For a family having only three children, what is the probability of having two girls and one boy?",
  "options": [
    "3/8",
    "1/8",
    "1/4",
    "1/2"
  ],
  "correct_answer": "3/8",
  "marks": 1,
  "difficulty": "easy"
},
{
  "question_id": "GATE2024_GA_Q08",
  "year": 2024,
  "subject": "General Aptitude",
  "topic": "Data Interpretation",
  "question_text": "Person 1 and Person 2 invest in three mutual funds A, B, and C. The amounts they invest are as follows: Person 1 invests ₹10,000 in A, ₹20,000 in B, and ₹20,000 in C. Person 2 invests ₹20,000 in A, ₹15,000 in B, and ₹15,000 in C. At the end of one year, the total amount that Person 1 gets is ₹500 more than Person 2. The annual rate of return for the mutual funds B and C is 15% each. What is the annual rate of return for the mutual fund A?",
  "options": [
    "7.5%",
    "10%",
    "15%",
    "20%"
  ],
  "correct_answer": "10%",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_GA_Q09",
  "year": 2024,
  "subject": "General Aptitude",
  "topic": "Spatial Reasoning",
  "question_text": "Three different views of a dice are shown in the given figure. The piece of paper that can be folded to make this dice is",
  "options": [
    "(A)",
    "(B)",
    "(C)",
    "(D)"
  ],
  "correct_answer": "(D)",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_GA_Q10",
  "year": 2024,
  "subject": "General Aptitude",
  "topic": "Spatial Visualization",
  "question_text": "Visualize two identical right circular cones such that one is inverted over the other and they share a common circular base. If a cutting plane passes through the vertices of the assembled cones, what shape does the outer boundary of the resulting cross-section make?",
  "options": [
    "A rhombus",
    "A triangle",
    "An ellipse",
    "A hexagon"
  ],
  "correct_answer": "A rhombus",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q11",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Probability and Statistics",
  "question_text": "Consider the following statements: (i) The mean and variance of a Poisson random variable are equal. (ii) For a standard normal random variable, the mean is zero and the variance is one. Which ONE of the following options is correct?",
  "options": [
    "Both (i) and (ii) are true",
    "(i) is true and (ii) is false",
    "(ii) is true and (i) is false",
    "Both (i) and (ii) are false"
  ],
  "correct_answer": "Both (i) and (ii) are true",
  "marks": 1,
  "difficulty": "easy"
},

{
  "question_id": "GATE2024_DA_Q12",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Probability",
  "question_text": "Three fair coins are tossed independently. T is the event that two or more tosses result in heads. S is the event that two or more tosses result in tails. What is the probability of the event T ∩ S?",
  "options": [
    "0",
    "0.5",
    "0.25",
    "1"
  ],
  "correct_answer": "0",
  "marks": 1,
  "difficulty": "easy"
},
{
  "question_id": "GATE2024_DA_Q13",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Linear Algebra",
  "question_text": "Consider the matrix M = [[2, -1], [3, 1]]. Which ONE of the following statements is TRUE?",
  "options": [
    "The eigenvalues of M are non-negative and real",
    "The eigenvalues of M are complex conjugate pairs",
    "One eigenvalue of M is positive and real, and another eigenvalue of M is zero",
    "One eigenvalue of M is non-negative and real, and another eigenvalue of M is negative and real"
  ],
  "correct_answer": "One eigenvalue of M is non-negative and real, and another eigenvalue of M is negative and real",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q14",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Graph Algorithms",
  "question_text": "Consider performing depth-first search (DFS) on an undirected and unweighted graph G starting at vertex s. For any vertex u in G, d[u] is the length of the shortest path from s to u. Let (u, v) be an edge in G such that d[u] < d[v]. If the edge (u, v) is explored first in the direction from u to v during the DFS, then (u, v) becomes a ______ edge.",
  "options": [
    "tree",
    "cross",
    "back",
    "gray"
  ],
  "correct_answer": "tree",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q15",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Calculus",
  "question_text": "For any twice differentiable function f: R → R, if at some x* ∈ R, f'(x*) = 0 and f''(x*) > 0, then the function f necessarily has a ______ at x = x*.",
  "options": [
    "local minimum",
    "global minimum",
    "local maximum",
    "global maximum"
  ],
  "correct_answer": "local minimum",
  "marks": 1,
  "difficulty": "easy"
},
{
  "question_id": "GATE2024_DA_Q16",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Data Structures",
  "question_text": "Match the items in Column 1 with the items in Column 2: (p) First In First Out, (q) Lookup Operation, (r) Last In First Out with (i) Stacks, (ii) Queues, (iii) Hash Tables.",
  "options": [
    "(p) − (ii), (q) − (iii), (r) − (i)",
    "(p) − (ii), (q) − (i), (r) − (iii)",
    "(p) − (i), (q) − (ii), (r) − (iii)",
    "(p) − (i), (q) − (iii), (r) − (ii)"
  ],
  "correct_answer": "(p) − (ii), (q) − (iii), (r) − (i)",
  "marks": 1,
  "difficulty": "easy"
},
{
  "question_id": "GATE2024_DA_Q17",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Support Vector Machines",
  "question_text": "Consider the dataset with six datapoints {(x1, y1), (x2, y2), …, (x6, y6)}, where x1 = [1, 0]^T, x2 = [0, 1]^T, x3 = [0, −1]^T, x4 = [−1, 0]^T, x5 = [2, 2]^T, and x6 = [−2, −2]^T. The labels are y1 = y2 = y5 = 1, and y3 = y4 = y6 = −1. A hard-margin linear support vector machine is trained on the above dataset. Which ONE of the following sets is a possible set of support vectors?",
  "options": [
    "{x1, x2, x5}",
    "{x3, x4, x5}",
    "{x4, x5}",
    "{x1, x2, x3, x4}"
  ],
  "correct_answer": "{x1, x2, x3, x4}",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q18",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Machine Learning",
  "question_text": "Match the items in Column 1 with the items in Column 2: (p) Principal Component Analysis, (q) Naïve Bayes Classification, (r) Logistic Regression with (i) Discriminative Model, (ii) Dimensionality Reduction, (iii) Generative Model.",
  "options": [
    "(p) − (iii), (q) − (i), (r) − (ii)",
    "(p) − (ii), (q) − (i), (r) − (iii)",
    "(p) − (ii), (q) − (iii), (r) − (i)",
    "(p) − (iii), (q) − (ii), (r) − (i)"
  ],
  "correct_answer": "(p) − (ii), (q) − (iii), (r) − (i)",
  "marks": 1,
  "difficulty": "easy"
},

{
  "question_id": "GATE2024_DA_Q19",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Clustering",
  "question_text": "Euclidean distance based k-means clustering algorithm was run on a dataset of 100 points with k = 3. If the points [1, 1]^T and [−1, 1]^T are both part of cluster 3, then which ONE of the following points is necessarily also part of cluster 3?",
  "options": [
    "[0, 0]",
    "[0, 2]",
    "[2, 0]",
    "[0, 1]"
  ],
  "correct_answer": "[0, 1]",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q20",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Naïve Bayes Classifier",
  "question_text": "Given a dataset with K binary-valued attributes (where K > 2) for a two-class classification task, the number of parameters to be estimated for learning a naïve Bayes classifier is",
  "options": [
    "2^K + 1",
    "2K + 1",
    "2^(K+1) + 1",
    "K^2 + 1"
  ],
  "correct_answer": "2K + 1",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q21",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Hashing",
  "question_text": "Consider performing uniform hashing on an open address hash table with load factor α = n/m < 1, where n elements are stored in the table with m slots. The expected number of probes in an unsuccessful search is at most 1/(1 − α). Inserting an element in this hash table requires at most ______ probes, on average.",
  "options": [
    "ln(1 / (1 − α))",
    "1 / (1 − α)",
    "1 + α/2",
    "1 / (1 + α)"
  ],
  "correct_answer": "1 / (1 − α)",
  "marks": 1,
  "difficulty": "medium"
},

{
  "question_id": "GATE2024_DA_Q22",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Linear Discriminant Analysis",
  "question_text": "For any binary classification dataset, let SB ∈ R^{d×d} and SW ∈ R^{d×d} be the between-class and within-class scatter matrices, respectively. The Fisher linear discriminant is defined by u* ∈ R^d that maximizes J(u) = (u^T SB u) / (u^T SW u). If λ = J(u*), SW is non-singular, and SB ≠ 0, then (u*, λ) must satisfy which ONE of the following equations?",
  "options": [
    "SW^{-1} SB u* = λ u*",
    "SW u* = λ SB u*",
    "SB SW u* = λ u*",
    "u*^T u* = λ^2"
  ],
  "correct_answer": "SW^{-1} SB u* = λ u*",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q23",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Heuristic Search",
  "question_text": "Let h1 and h2 be two admissible heuristics used in A* search. Which ONE of the following expressions is always an admissible heuristic?",
  "options": [
    "h1 + h2",
    "h1 × h2",
    "h1 / h2, (h2 ≠ 0)",
    "|h1 − h2|"
  ],
  "correct_answer": "|h1 − h2|",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q24",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Probabilistic Graphical Models",
  "question_text": "Consider five random variables U, V, W, X, and Y whose joint distribution satisfies: P(U, V, W, X, Y) = P(U)P(V)P(W|U, V)P(X|W)P(Y|W). Which ONE of the following statements is FALSE?",
  "options": [
    "Y is conditionally independent of V given W",
    "X is conditionally independent of U given W",
    "U and V are conditionally independent given W",
    "Y and X are conditionally independent given W"
  ],
  "correct_answer": "U and V are conditionally independent given W",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q25",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Adversarial Search",
  "question_text": "Consider the following statement: In adversarial search, α–β pruning can be applied to game trees of any depth where α is the (m) value choice we have formed so far at any choice point along the path for the MAX player and β is the (n) value choice we have formed so far at any choice point along the path for the MIN player. Which ONE of the following choices of (m) and (n) makes the above statement valid?",
  "options": [
    "(m) = highest, (n) = highest",
    "(m) = lowest, (n) = highest",
    "(m) = highest, (n) = lowest",
    "(m) = lowest, (n) = lowest"
  ],
  "correct_answer": "(m) = highest, (n) = lowest",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q26",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Relational Algebra",
  "question_text": "Consider a database that includes the following relations: Defender(name, rating, side, goals), Forward(name, rating, assists, goals), and Team(name, club, price). Which ONE of the following relational algebra expressions checks that every name occurring in Team appears in either Defender or Forward, where φ denotes the empty set?",
  "options": [
    "Π_name(Team) \\ (Π_name(Defender) ∩ Π_name(Forward)) = φ",
    "(Π_name(Defender) ∩ Π_name(Forward)) \\ Π_name(Team) = φ",
    "Π_name(Team) \\ (Π_name(Defender) ∪ Π_name(Forward)) = φ",
    "(Π_name(Defender) ∪ Π_name(Forward)) \\ Π_name(Team) = φ"
  ],
  "correct_answer": "Π_name(Team) \\ (Π_name(Defender) ∪ Π_name(Forward)) = φ",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q27",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Data Normalization",
  "question_text": "Let the minimum, maximum, mean and standard deviation values for the attribute income of data scientists be ₹46000, ₹170000, ₹96000, and ₹21000, respectively. The z-score normalized income value of ₹106000 is closest to which ONE of the following options?",
  "options": [
    "0.217",
    "0.476",
    "0.623",
    "2.304"
  ],
  "correct_answer": "0.476",
  "marks": 1,
  "difficulty": "easy"
},
{
  "question_id": "GATE2024_DA_Q28",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Tree Traversals",
  "question_text": "Consider the following tree traversals on a full binary tree: (i) Preorder, (ii) Inorder, (iii) Postorder. Which of the following traversal options is/are sufficient to uniquely reconstruct the full binary tree?",
  "options": [
    "(i) and (ii)",
    "(ii) and (iii)",
    "(i) and (iii)",
    "(ii) only"
  ],
  "correct_answer": "(i) and (iii)",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q29",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Propositional Logic",
  "question_text": "Let x and y be two propositions. Which of the following statements is a tautology?",
  "options": [
    "(¬x ∧ y) ⇒ (y ⇒ x)",
    "(x ∧ ¬y) ⇒ (¬x ⇒ y)",
    "(¬x ∧ y) ⇒ (x ⇒ y)",
    "(x ∧ ¬y) ⇒ (y ⇒ x)"
  ],
  "correct_answer": "(¬x ∧ y) ⇒ (x ⇒ y)",
  "marks": 1,
  "difficulty": "medium"
},
{
  "question_id": "GATE2024_DA_Q30",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "Sorting Algorithms",
  "question_text": "Consider sorting the array of integers [60, 70, 80, 90, 100] in ascending order using an in-place Quicksort algorithm that uses the last element as the pivot. The minimum number of swaps performed during the Quicksort is _______",
  "options": [],
  "correct_answer": "0",
  "marks": 1,
  "difficulty": "easy"
},
{
  "question_id": "GATE2024_DA_Q31",
  "year": 2024,
  "subject": "Data Science and Artificial Intelligence",
  "topic": "SQL",
  "question_text": "Consider the tables Raider(ID, Name, RaidPoints) and Team(City, ID, BidPoints) maintained by a Kabaddi league, where ID in Team references the primary key of Raider. The SQL query executed is: SELECT FROM Raider, Team WHERE Raider.ID = Team.ID AND City = \"Jaipur\" AND RaidPoints > 200;. The number of rows returned by this query is _______",
  "options": [],
  "correct_answer": "2",
  "marks": 1,
  "difficulty": "medium"
},



];

async function addBatch() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');
    
    let added = 0;
    let skipped = 0;
    
    for (const q of questions) {
      try {
        await Question.create(q);
        added++;
        console.log(`✓ Added: ${q.question_id}`);
      } catch (error) {
        if (error.code === 11000) {
          skipped++;
          console.log(`⊗ Skipped (duplicate): ${q.question_id}`);
        } else {
          console.error(`✗ Error with ${q.question_id}:`, error.message);
        }
      }
    }
    
    console.log(`\n=== Summary ===`);
    console.log(`Added: ${added}`);
    console.log(`Skipped: ${skipped}`);
    console.log(`Total attempted: ${questions.length}`);
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

addBatch();