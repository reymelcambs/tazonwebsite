---
title: "Designing a Locally Grounded AI Learning Companion for Uganda's Secondary Education"
date: "2026-10-13"
category: "Research"
excerpt: "A development-oriented research paper on curriculum alignment, formative assessment, and responsible artificial intelligence for Ugandan O-Level and A-Level learners."
author: "Stellas AI Research and Development Team, Tazon Inc."
featured: true
keywords:
  - Stellas AI
  - Uganda
  - secondary education
  - competency-based curriculum
  - artificial intelligence in education
  - formative assessment
  - curriculum alignment
  - personalised learning
---

## Research integrity note

This paper describes the project's rationale, current design direction, and an evaluation agenda. It does not report a controlled trial or claim measured improvements in grades, learning outcomes, or examination performance. Project usage figures are identified as internally reported and require validation before formal publication.

## Abstract

Secondary-school learners in Uganda study within a changing curriculum and assessment environment, while opportunities for individualised explanation and feedback can vary across classrooms, subjects, and schools. Generative artificial intelligence (AI) can provide on-demand assistance, but general-purpose systems may give inaccurate answers, overlook local curriculum requirements, misjudge student reasoning, or encourage answer copying.

This paper presents Stellas AI, a developing educational AI platform intended to support Ugandan O-Level and A-Level learners through curriculum-grounded explanations, practice questions, response feedback, and learning-progress support. The paper situates the project within UNESCO guidance on human-centred and age-appropriate AI, UNESCO's caution that education technology must be evaluated by learning outcomes, and Uganda's transition toward competency-based learning and assessment.

Uganda's 2025 Education Statistical Abstract reports a national secondary student–teacher ratio of 31:1 and a student–classroom ratio of 65:1, though these national indicators do not describe every school or classroom (Ministry of Education and Sports [MoES], 2025). Stellas is being developed around NCDC learning outcomes and curriculum materials, with a planned process for reviewing relevant NCDC and UNEB publications as assessment requirements evolve.

The paper describes the system's design principles, early product maturity, safeguards, limitations, and a future evaluation framework. Early project engagement—approximately 500 clicks over three months, as reported by the development team—is a usage signal only, not evidence of educational impact. The central proposition is that a locally grounded AI tutor may complement teachers by offering additional opportunities for explanation and practice, provided its curriculum alignment, answer quality, accessibility, privacy, and learning effects are independently evaluated.

## 1. Introduction

Generative AI has made conversational assistance available to learners outside formal lessons. A student can ask a question, request an explanation, test an idea, or receive feedback at a time that may not coincide with access to a teacher. The educational value of that access, however, depends on more than a fluent response. A learning assistant must explain accurately, support independent thinking, use appropriate examples, recognise misconceptions, and help learners practise the competencies that their curriculum expects.

Stellas AI began from a practical question: could an AI learning companion be designed specifically for Ugandan secondary-school students, rather than relying exclusively on general-purpose tools to interpret local curricula and examinations? The project's early motivation included public discussion of AI, education, and local relevance in Ugandan media. New Vision coverage has included calls for locally relevant and inclusive AI learning, alongside warnings that students should not rely on AI to replace their own thinking (Mirembe, n.d.; Kyotalengerire, 2025). These reports provide social context; they are not treated here as scientific evidence of AI effectiveness.

This paper records the rationale and current design direction of Stellas as a development-oriented case. It does not claim that AI can solve structural problems such as teacher shortages, school connectivity, or unequal access to learning materials. Instead, it explores a narrower contribution: a curriculum-grounded digital assistant that may extend opportunities for individual practice and feedback beyond the time available in a lesson. The paper asks three questions: (1) what contextual needs should shape an AI tutor for Ugandan secondary education; (2) how can curriculum and assessment alignment be represented in the product design; and (3) what evidence is needed before educational benefits can be claimed?

## 2. Context: Uganda's secondary education environment

### 2.1 Curriculum and assessment are changing

Uganda introduced its lower-secondary competency-based curriculum from 2020. The NCDC describes the framework as organised around learning outcomes, values, generic skills, cross-cutting issues, and a curriculum menu, rather than content coverage alone (National Curriculum Development Centre [NCDC], n.d.). The NCDC's account of the aligned A-Level curriculum published in October 2025 explains that the changes included removing redundant content, reorganising scope and sequence, moving towards learner-centred pedagogy, and using criterion-referenced assessment focused on defined standards (NCDC, 2025).

In July 2026, NCDC reported that its Advanced Secondary Curriculum assessment guidelines included learning outcomes, assessment constructs, scoring rubrics, and sample assessment tasks (NCDC, 2026). The implications for an AI tutor are material. A system cannot assume that success means reproducing textbook definitions or giving a final numerical answer. It must support application, interpretation, explanation, and evidence of competence where those outcomes are required.

### 2.2 Personalised support and classroom constraints

The Ministry of Education and Sports' Education Statistical Abstract 2025 reports a national secondary student–teacher ratio of 31:1 across government and private schools. The same table reports a student–classroom ratio of 65:1 nationally, with 75:1 in government schools and 46:1 in private schools (MoES, 2025, Table 3, p. xvii).

The relevant design question is therefore not whether AI can replace teachers, but whether learners can gain another source of explanation and low-stakes practice when a teacher is not immediately available. A digital tutor may allow a learner to revisit a concept, ask the same question in a different way, and attempt additional problems at their own pace. It cannot provide the full relationship, observation, care, practical supervision, or professional judgement of a teacher.

### 2.3 Local relevance and digital inclusion

UNESCO's 2023 Global Education Monitoring Report argues that technology can extend access to learning but can also exclude learners when meaningful connectivity is unequal. It also cautions that the evidence for the impact of education technology is often weak and that tools should be assessed against learning outcomes rather than the mere presence of technology (UNESCO, 2023a). These concerns suggest that localisation must mean more than using a Ugandan name or familiar examples: it should include curriculum mapping, assessment relevance, accessibility, safe data practices, and testing with students and teachers in different learning settings.

## 3. Related guidance and research

### 3.1 UNESCO: human-centred, age-appropriate AI

UNESCO's Guidance for Generative AI in Education and Research calls for a human-centred approach, ethical validation, age-appropriate use, and protection of personal data. It notes that educational institutions need ways to validate tools and that AI capabilities are evolving faster than many regulatory frameworks (Miao & Holmes, 2023). For Stellas, this means the product should be judged by whether it supports learning and learner agency, not by conversational fluency alone.

UNESCO's AI Competency Framework for Students sets out competencies across a human-centred mindset, AI ethics, AI techniques and applications, and AI system design, with progression from understanding to applying and creating (Miao et al., 2024). Its framework for teachers similarly emphasises human-centred thinking, ethics, AI foundations and applications, AI pedagogy, and professional learning (Miao & Cukurova, 2024).

### 3.2 Evidence standards for education technology

UNESCO's 2023 GEM report warns that the evidence base for education technology is uneven, with much research conducted in wealthier settings and limited independent evaluation of many products (UNESCO, 2023a). Therefore, engagement statistics, positive comments, or a functioning application should not be presented as proof of learning gains. A credible evaluation of Stellas must test answer accuracy and curriculum alignment, as well as whether learners demonstrate improved understanding, transfer knowledge to unfamiliar tasks, retain learning, and develop more effective study habits.

### 3.3 Uganda's competency-based assessment research

Research published in the NCDC's Journal of Curriculum Development, Evaluation, and Education has examined competency-based assessment in Uganda. Atibuni, Muzaale, and Obong Capuc (2024) report a study involving 491 learners across 17 districts and note a gap between the ambitions of competency-based learning and implementation practices that can continue to privilege memory over critical and creative problem-solving. A later qualitative study drawing on interviews with 21 teachers identifies potential gains from active learning and generic-skills development, alongside continuing concerns about resources, infrastructure, ICT competencies, and implementation support (Namatende-Sakwa et al., 2025).

## 4. Stellas AI: platform concept and design

### 4.1 Product purpose

Stellas AI is being developed as an AI learning companion for Uganda's O-Level and A-Level learners. Its intended role is to help students understand topics, practise curriculum-relevant questions, receive feedback on responses, and identify where further revision may be useful. The design aim is to shift AI use from answer production towards a study loop: ask, understand, practise, respond, receive feedback, and try again. The student remains responsible for thinking and answering; the AI should make the path to understanding clearer rather than hide it.

### 4.2 Curriculum-grounded content

The development team reports that Stellas already uses NCDC learning outcomes and curriculum/textbook materials as part of its educational knowledge base. Alignment should be traceable. Each major learning objective or assessment item should be linked to the source document, subject, level, topic, relevant learning outcome, version or publication date, and validation status.

This makes it possible to find which content must change when a curriculum or assessment document is updated. It also helps reviewers separate an official curriculum statement from a teacher's interpretation, a generated explanation, and an unverified hypothesis.

### 4.3 Working with UNEB and NCDC updates

Stellas' design direction is to incorporate relevant official UNEB and NCDC updates into its assessment and content workflows. NCDC's 2026 advanced-secondary assessment guidelines provide a concrete example of why version control matters: the guidelines include outcomes, assessment constructs, rubrics, and sample tasks that can inform question generation and feedback design (NCDC, 2026). UNEB has also stated that the 2026 UACE cohort will be assessed under the aligned curriculum, including a modified format involving scenario-based tasks (UNEB, 2026).

### 4.4 Intended learning workflow

1. **Orient.** The student identifies a subject, topic, question, or learning goal.
2. **Explain.** Stellas offers a curriculum-relevant explanation, example, or guided solution, with the level of detail adapted to the learner's request.
3. **Practise.** The student attempts questions designed to exercise the intended concept or competency, including applied and scenario-based work where appropriate.
4. **Respond and receive feedback.** The system considers the reasoning or working shown, not only the final answer, and explains errors where the system can do so reliably.
5. **Revisit.** Further hints, targeted practice, or a different explanation help the learner address a gap.
6. **Reflect.** Progress indicators help the learner decide what to revise next; they should be presented as estimates, not infallible diagnoses.

## 5. Theory of change

The proposed theory of change is that a curriculum-grounded tutor can increase access to relevant explanations and deliberate practice outside scheduled lessons. If those explanations are accurate and appropriately scaffolded, students may gain more opportunities to identify misunderstandings, attempt tasks, and use feedback. Each link in this chain is an assumption that requires evaluation; access to AI does not automatically produce learning.

## 6. Early development status and available evidence

The project has developed an initial version and is moving toward a second version with a cleaner interface and O-Level coverage alongside the earlier A-Level focus. The current product direction includes a tutor interaction loop, practice, question generation, response feedback, and progress-oriented features.

The development team reports approximately 500 clicks over a three-month period. This is useful as an early engagement signal, but the meaning of 'click' must be defined before it is cited as a formal usage result. Clicks are not necessarily unique users, active study sessions, completed learning tasks, or successful learning outcomes.

## 7. Responsible AI and data governance

A student-facing educational AI must be designed for the possibility that its answer may be wrong, that a learner may be underage, and that a student's interaction history can reveal learning difficulties or other personal information. UNESCO's guidance supports age-appropriate use, privacy protection, and human-centred validation (Miao & Holmes, 2023). The following requirements should therefore be treated as core product work rather than optional polish:

- **Accuracy and uncertainty.** The system should avoid presenting uncertain answers as facts, provide a way to flag errors, and route high-impact or disputed content for human review.
- **Learning before answer completion.** Where suitable, the tutor should use hints, worked reasoning, checks for understanding, and follow-up practice rather than immediately completing every academic task.
- **Curriculum provenance.** Subject content and exam-style items should carry source, level, topic, version, and review status. Generated examples must not be misrepresented as official UNEB past-paper questions.
- **Assessment fairness.** Marking should acknowledge valid alternative methods and partial understanding, while distinguishing a correct final answer from sound reasoning.
- **Privacy and access control.** Collect only data needed for educational or product-improvement purposes. Clearly explain what is stored and who can review it; restrict developer access, secure stored data, provide appropriate deletion and retention procedures.
- **Student research and survey consent.** Explain the purpose of feedback collection in age-appropriate language. Avoid requiring names or identifying details unless necessary, and obtain appropriate school, guardian, or ethics permissions where required.

## 8. Evaluation framework

The next research phase should move from describing a product to testing specific claims. A mixed-methods, staged evaluation is recommended. It should begin with technical and curriculum validation before any claim about learning improvement is made.

### 8.1 Stage 1: curriculum and assessment validation

A panel of subject teachers, curriculum specialists, and assessment experts should review a sample of Stellas explanations, generated questions, marking feedback, and progression decisions. Each item should be checked against the relevant learning outcome, content scope, cognitive demand, factual correctness, expected reasoning, and fairness of marking.

### 8.2 Stage 2: student usability and experience

Student research should investigate whether the interface is understandable, whether explanations help learners progress, what students do when they do not understand an answer, and how Stellas compares with other tools they use.

### 8.3 Stage 3: learning-outcome pilot

A pilot study should use a subject and topic with clearly specified learning outcomes, common assessments, and a feasible comparison design. Where practicable, collect baseline performance, provide a defined period of Stellas-supported study, use an independently marked post-assessment, and test retention after a delay.

## 9. Discussion

Stellas' strongest research rationale is not simply that AI is new or that a general-purpose chatbot is available. It is the proposition that a locally grounded learning assistant can make the relationship between curriculum outcomes, practice, feedback, and next steps more explicit for secondary learners. The intended differentiation is curriculum relevance and formative support: using local curriculum materials to guide explanations and item design, maintaining a reviewed relationship with official assessment updates, and improving the system through structured feedback from students and subject experts.

This proposition remains open to testing. A curriculum reference layer can reduce certain forms of mismatch, but it does not guarantee accuracy. A language model can misread a question, invent a marking rule, produce a convincing wrong explanation, or fail to recognise a correct alternative method. Human review, robust question testing, transparent uncertainty, and evaluation with real students are therefore central to the product's educational credibility.

## 10. Limitations

- This is a development-oriented case description, not a peer-reviewed experimental study or a systematic literature review.
- No controlled student learning-outcome data are available in this draft. No causal claim about grades, mastery, or examination performance is made.
- The reported figure of approximately 500 clicks over three months comes from the development team and has not been independently audited.
- The extent of the project's current curriculum mapping, independent validation, update workflow, and data-governance controls must be documented and verified by the team before publication.
- The paper uses national education indicators and selected policy/research sources; these do not fully represent differences across Ugandan regions, school types, subjects, languages, infrastructure conditions, or learner needs.
- New Vision articles are included as examples of public discussion, not as substitutes for peer-reviewed research or official education statistics.

## 11. Conclusion

Stellas AI is being developed around a locally important goal: helping Ugandan O-Level and A-Level learners access relevant explanations, practise academic skills, and receive feedback in ways that reflect the curriculum and assessment environment they actually face. Official sources show that Uganda's curriculum and assessment framework continues to evolve, while national indicators point to variation in the conditions in which teaching and learning take place.

UNESCO's guidance makes clear that AI in education should be human-centred, age-appropriate, privacy-conscious, and evaluated against meaningful outcomes. The next step is not to claim that Stellas has solved these challenges, but to make the design testable.

The team should document the curriculum sources used, create a disciplined NCDC/UNEB update process, validate questions and feedback with experts, protect student research data, and run a carefully designed pilot measuring learning rather than clicks alone. If those steps demonstrate reliable benefits, Stellas may become a useful supplement to teachers and a credible example of context-aware educational AI developed for Uganda. *Its value will ultimately depend on evidence, not intention.*

## References

Atibuni, D. Z., Muzaale, T., & Obong Capuc, F. (2024). The challenges of and strategies for competency based assessment by Uganda National Examinations Board. *Journal of Curriculum Development, Evaluation, and Education*, 1(1), 12–31. https://doi.org/10.64948/JCDEE.v1.i1.2024.5

Kyotalengerire, A. (2025, August 12). Students warned against relying on AI for academic work. *New Vision*. https://www.newvision.co.ug/category/education/students-warned-against-relying-on-ai-for-aca-NV_216356_092026

Miao, F., & Cukurova, M. (2024). AI competency framework for teachers. UNESCO. https://www.unesco.org/en/articles/ai-competency-framework-teachers

Miao, F., & Holmes, W. (2023). Guidance for generative AI in education and research. UNESCO. https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research

Miao, F., Shiohira, K., & Lao, N. (2024). AI competency framework for students. UNESCO. https://www.unesco.org/en/articles/ai-competency-framework-students

Mirembe, J. (n.d.). Govt moves to introduce inclusive AI curriculum for learners. *New Vision*. Retrieved October 13, 2026. https://www.newvision.co.ug/category/education/govt-moves-to-introduce-inclusive-ai-curricul-NV_222850

Ministry of Education and Sports. (2025). *The education statistics abstract 2025* (Vol. 1). Government of Uganda. https://www.education.go.ug/wp-content/uploads/2026/01/UGANDAS-EDUCATION-STATISTICAL-ABSTRACT_2025.pdf

Namatende-Sakwa, L., et al. (2025). From a knowledge-based to a competence-based curriculum: Insights into opportunities and threats to implementation in Uganda. *Journal of Curriculum Development, Evaluation, and Education*. https://doi.org/10.64948/JCDEE.v1.i2.2025.111

National Curriculum Development Centre. (n.d.). Lower secondary curriculum embraced. https://ncdc.go.ug/lower-secondary-curriculum-embraced/

National Curriculum Development Centre. (2025, October 8). NCDC unveils aligned A-Level curriculum. https://ncdc.go.ug/2025/10/08/ncdc-launches-2nd-international-conference-on-curriculum-development-2/

National Curriculum Development Centre. (2026, July 27). NCDC releases assessment guidelines to support effective implementation of the advanced secondary curriculum. https://ncdc.go.ug/2026/07/27/ncdc-releases-assessment-guidelines-to-support-effective-implementation-of-the-advanced-secondary-curriculum/

Uganda National Examinations Board. (2026, June 1). UNEB normal registration extended to 30th June 2026. https://uneb.ac.ug/2026/06/01/uneb-normal-registration-extended-to-30th-june-2026/

UNESCO. (2023a). *2023 Global Education Monitoring Report: Technology in education: A tool on whose terms?* https://gem-report-2023.unesco.org/
