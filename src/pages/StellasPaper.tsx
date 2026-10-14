import { Link } from 'react-router-dom';
import { Section } from '../components/Shared';

export default function StellasPaper() {
  return (
    <article className="pt-28 pb-16">
      {/* Paper Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 fade-in">
        <nav className="mb-8">
          <Link to="/research" className="text-sm text-[var(--accent)] link-underline">← Back to Research</Link>
        </nav>

        <p className="font-mono-label mb-4">Research Paper · Working Draft</p>
        <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
          Designing a Locally Grounded AI Learning Companion for Uganda's Secondary Education
        </h1>
        <p className="font-serif-body text-lg text-[var(--text-secondary)] italic mb-6">
          A development-oriented research paper on curriculum alignment, formative assessment, and responsible artificial intelligence
        </p>

        {/* Meta table */}
        <div className="border-t border-b border-[var(--border)] py-4 my-8 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="font-mono-label w-40 flex-shrink-0">Prepared by</span>
            <span className="font-serif-body text-[var(--text-secondary)]">Stellas AI Research and Development Team, Tazon Inc.</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="font-mono-label w-40 flex-shrink-0">Document status</span>
            <span className="font-serif-body text-[var(--text-secondary)]">Working draft for technical, curriculum, and research validation</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="font-mono-label w-40 flex-shrink-0">Date</span>
            <span className="font-serif-body text-[var(--text-secondary)]">13 October 2026</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="font-mono-label w-40 flex-shrink-0">Scope</span>
            <span className="font-serif-body text-[var(--text-secondary)]">Ugandan O-Level and A-Level secondary education</span>
          </div>
        </div>

        {/* Keywords */}
        <div className="mb-8">
          <p className="font-mono-label mb-2">Keywords</p>
          <div className="flex flex-wrap gap-2">
            {['Stellas AI', 'Uganda', 'secondary education', 'competency-based curriculum', 'artificial intelligence in education', 'formative assessment', 'curriculum alignment', 'personalised learning'].map((kw) => (
              <span key={kw} className="px-3 py-1 rounded-full text-xs bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)]">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Paper Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Table of Contents */}
        <div className="card !bg-[var(--bg-card)] mb-12 fade-in">
          <h2 className="font-headline text-lg mb-4">Contents</h2>
          <nav className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
            {[
              { num: '0', title: 'Research integrity note' },
              { num: '', title: 'Abstract' },
              { num: '1', title: 'Introduction' },
              { num: '2', title: "Context: Uganda's secondary education environment" },
              { num: '3', title: 'Related guidance and research' },
              { num: '4', title: 'Stellas AI: platform concept and design' },
              { num: '5', title: 'Theory of change' },
              { num: '6', title: 'Early development status and available evidence' },
              { num: '7', title: 'Responsible AI and data governance' },
              { num: '8', title: 'Evaluation framework' },
              { num: '9', title: 'Discussion' },
              { num: '10', title: 'Limitations' },
              { num: '11', title: 'Conclusion' },
              { num: '', title: 'References' },
            ].map((item) => (
              <a key={item.title} href={`#section-${item.num}`} className="py-1.5 text-sm font-serif-body text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                {item.num ? `${item.num}. ` : ''}{item.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Research integrity note */}
        <section id="section-0" className="mb-12 fade-in">
          <div className="border-l-4 border-[var(--accent)] pl-6 py-2 bg-[var(--accent)]/5 rounded-r-xl">
            <h2 className="font-headline text-xl mb-3">Research integrity note</h2>
            <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
              This paper describes the project's rationale, current design direction, and an evaluation agenda. It does not report a controlled trial or claim measured improvements in grades, learning outcomes, or examination performance. Project usage figures are identified as internally reported and require validation before formal publication.
            </p>
          </div>
        </section>

        {/* Abstract */}
        <section id="section-" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">Abstract</h2>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            Secondary-school learners in Uganda study within a changing curriculum and assessment environment, while opportunities for individualised explanation and feedback can vary across classrooms, subjects, and schools. Generative artificial intelligence (AI) can provide on-demand assistance, but general-purpose systems may give inaccurate answers, overlook local curriculum requirements, misjudge student reasoning, or encourage answer copying.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            This paper presents Stellas AI, a developing educational AI platform intended to support Ugandan O-Level and A-Level learners through curriculum-grounded explanations, practice questions, response feedback, and learning-progress support. The paper situates the project within UNESCO guidance on human-centred and age-appropriate AI, UNESCO's caution that education technology must be evaluated by learning outcomes, and Uganda's transition toward competency-based learning and assessment.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            Uganda's 2025 Education Statistical Abstract reports a national secondary student–teacher ratio of 31:1 and a student–classroom ratio of 65:1, though these national indicators do not describe every school or classroom (Ministry of Education and Sports [MoES], 2025). Stellas is being developed around NCDC learning outcomes and curriculum materials, with a planned process for reviewing relevant NCDC and UNEB publications as assessment requirements evolve.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            The paper describes the system's design principles, early product maturity, safeguards, limitations, and a future evaluation framework. Early project engagement—approximately 500 clicks over three months, as reported by the development team—is a usage signal only, not evidence of educational impact. The central proposition is that a locally grounded AI tutor may complement teachers by offering additional opportunities for explanation and practice, provided its curriculum alignment, answer quality, accessibility, privacy, and learning effects are independently evaluated.
          </p>
        </section>

        {/* Section 1: Introduction */}
        <section id="section-1" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">1. Introduction</h2>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            Generative AI has made conversational assistance available to learners outside formal lessons. A student can ask a question, request an explanation, test an idea, or receive feedback at a time that may not coincide with access to a teacher. The educational value of that access, however, depends on more than a fluent response. A learning assistant must explain accurately, support independent thinking, use appropriate examples, recognise misconceptions, and help learners practise the competencies that their curriculum expects.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            Stellas AI began from a practical question: could an AI learning companion be designed specifically for Ugandan secondary-school students, rather than relying exclusively on general-purpose tools to interpret local curricula and examinations? The project's early motivation included public discussion of AI, education, and local relevance in Ugandan media. New Vision coverage has included calls for locally relevant and inclusive AI learning, alongside warnings that students should not rely on AI to replace their own thinking (Mirembe, n.d.; Kyotalengerire, 2025). These reports provide social context; they are not treated here as scientific evidence of AI effectiveness.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            This paper records the rationale and current design direction of Stellas as a development-oriented case. It does not claim that AI can solve structural problems such as teacher shortages, school connectivity, or unequal access to learning materials. Instead, it explores a narrower contribution: a curriculum-grounded digital assistant that may extend opportunities for individual practice and feedback beyond the time available in a lesson. The paper asks three questions: (1) what contextual needs should shape an AI tutor for Ugandan secondary education; (2) how can curriculum and assessment alignment be represented in the product design; and (3) what evidence is needed before educational benefits can be claimed?
          </p>
        </section>

        {/* Section 2: Context */}
        <section id="section-2" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">2. Context: Uganda's secondary education environment</h2>

          <h3 className="font-headline text-xl mb-3 mt-8">2.1 Curriculum and assessment are changing</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            Uganda introduced its lower-secondary competency-based curriculum from 2020. The NCDC describes the framework as organised around learning outcomes, values, generic skills, cross-cutting issues, and a curriculum menu, rather than content coverage alone (National Curriculum Development Centre [NCDC], n.d.). The NCDC's account of the aligned A-Level curriculum published in October 2025 explains that the changes included removing redundant content, reorganising scope and sequence, moving towards learner-centred pedagogy, and using criterion-referenced assessment focused on defined standards (NCDC, 2025).
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            In July 2026, NCDC reported that its Advanced Secondary Curriculum assessment guidelines included learning outcomes, assessment constructs, scoring rubrics, and sample assessment tasks (NCDC, 2026). The implications for an AI tutor are material. A system cannot assume that success means reproducing textbook definitions or giving a final numerical answer. It must support application, interpretation, explanation, and evidence of competence where those outcomes are required.
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">2.2 Personalised support and classroom constraints</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            The Ministry of Education and Sports' Education Statistical Abstract 2025 reports a national secondary student–teacher ratio of 31:1 across government and private schools. The same table reports a student–classroom ratio of 65:1 nationally, with 75:1 in government schools and 46:1 in private schools (MoES, 2025, Table 3, p. xvii).
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            The relevant design question is therefore not whether AI can replace teachers, but whether learners can gain another source of explanation and low-stakes practice when a teacher is not immediately available. A digital tutor may allow a learner to revisit a concept, ask the same question in a different way, and attempt additional problems at their own pace. It cannot provide the full relationship, observation, care, practical supervision, or professional judgement of a teacher.
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">2.3 Local relevance and digital inclusion</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            UNESCO's 2023 Global Education Monitoring Report argues that technology can extend access to learning but can also exclude learners when meaningful connectivity is unequal. It also cautions that the evidence for the impact of education technology is often weak and that tools should be assessed against learning outcomes rather than the mere presence of technology (UNESCO, 2023a). These concerns suggest that localisation must mean more than using a Ugandan name or familiar examples: it should include curriculum mapping, assessment relevance, accessibility, safe data practices, and testing with students and teachers in different learning settings.
          </p>
        </section>

        {/* Section 3: Related guidance */}
        <section id="section-3" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">3. Related guidance and research</h2>

          <h3 className="font-headline text-xl mb-3 mt-6">3.1 UNESCO: human-centred, age-appropriate AI</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            UNESCO's Guidance for Generative AI in Education and Research calls for a human-centred approach, ethical validation, age-appropriate use, and protection of personal data. It notes that educational institutions need ways to validate tools and that AI capabilities are evolving faster than many regulatory frameworks (Miao & Holmes, 2023). For Stellas, this means the product should be judged by whether it supports learning and learner agency, not by conversational fluency alone.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            UNESCO's AI Competency Framework for Students sets out competencies across a human-centred mindset, AI ethics, AI techniques and applications, and AI system design, with progression from understanding to applying and creating (Miao et al., 2024). Its framework for teachers similarly emphasises human-centred thinking, ethics, AI foundations and applications, AI pedagogy, and professional learning (Miao & Cukurova, 2024).
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">3.2 Evidence standards for education technology</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            UNESCO's 2023 GEM report warns that the evidence base for education technology is uneven, with much research conducted in wealthier settings and limited independent evaluation of many products (UNESCO, 2023a). Therefore, engagement statistics, positive comments, or a functioning application should not be presented as proof of learning gains. A credible evaluation of Stellas must test answer accuracy and curriculum alignment, as well as whether learners demonstrate improved understanding, transfer knowledge to unfamiliar tasks, retain learning, and develop more effective study habits.
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">3.3 Uganda's competency-based assessment research</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            Research published in the NCDC's Journal of Curriculum Development, Evaluation, and Education has examined competency-based assessment in Uganda. Atibuni, Muzaale, and Obong Capuc (2024) report a study involving 491 learners across 17 districts and note a gap between the ambitions of competency-based learning and implementation practices that can continue to privilege memory over critical and creative problem-solving. A later qualitative study drawing on interviews with 21 teachers identifies potential gains from active learning and generic-skills development, alongside continuing concerns about resources, infrastructure, ICT competencies, and implementation support (Namatende-Sakwa et al., 2025).
          </p>
        </section>

        {/* Section 4: Platform concept */}
        <section id="section-4" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">4. Stellas AI: platform concept and design</h2>

          <h3 className="font-headline text-xl mb-3 mt-6">4.1 Product purpose</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            Stellas AI is being developed as an AI learning companion for Uganda's O-Level and A-Level learners. Its intended role is to help students understand topics, practise curriculum-relevant questions, receive feedback on responses, and identify where further revision may be useful. The design aim is to shift AI use from answer production towards a study loop: ask, understand, practise, respond, receive feedback, and try again. The student remains responsible for thinking and answering; the AI should make the path to understanding clearer rather than hide it.
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">4.2 Curriculum-grounded content</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            The development team reports that Stellas already uses NCDC learning outcomes and curriculum/textbook materials as part of its educational knowledge base. Alignment should be traceable. Each major learning objective or assessment item should be linked to the source document, subject, level, topic, relevant learning outcome, version or publication date, and validation status.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            This makes it possible to find which content must change when a curriculum or assessment document is updated. It also helps reviewers separate an official curriculum statement from a teacher's interpretation, a generated explanation, and an unverified hypothesis.
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">4.3 Working with UNEB and NCDC updates</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            Stellas' design direction is to incorporate relevant official UNEB and NCDC updates into its assessment and content workflows. NCDC's 2026 advanced-secondary assessment guidelines provide a concrete example of why version control matters: the guidelines include outcomes, assessment constructs, rubrics, and sample tasks that can inform question generation and feedback design (NCDC, 2026). UNEB has also stated that the 2026 UACE cohort will be assessed under the aligned curriculum, including a modified format involving scenario-based tasks (UNEB, 2026).
          </p>

          <h3 className="font-headline text-xl mb-3 mt-8">4.4 Intended learning workflow</h3>
          <div className="card !bg-[var(--bg-card)] my-6">
            <ol className="space-y-4">
              {[
                { step: 'Orient', desc: 'The student identifies a subject, topic, question, or learning goal.' },
                { step: 'Explain', desc: 'Stellas offers a curriculum-relevant explanation, example, or guided solution, with the level of detail adapted to the learner\'s request.' },
                { step: 'Practise', desc: 'The student attempts questions designed to exercise the intended concept or competency, including applied and scenario-based work where appropriate.' },
                { step: 'Respond and receive feedback', desc: 'The system considers the reasoning or working shown, not only the final answer, and explains errors where the system can do so reliably.' },
                { step: 'Revisit', desc: 'Further hints, targeted practice, or a different explanation help the learner address a gap.' },
                { step: 'Reflect', desc: 'Progress indicators help the learner decide what to revise next; they should be presented as estimates, not infallible diagnoses.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-headline text-[var(--accent)] flex-shrink-0 w-6">{i + 1}.</span>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">{item.step}.</span>{' '}
                    <span className="font-serif-body text-[var(--text-secondary)]">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 5: Theory of change */}
        <section id="section-5" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">5. Theory of change</h2>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-6">
            The proposed theory of change is that a curriculum-grounded tutor can increase access to relevant explanations and deliberate practice outside scheduled lessons. If those explanations are accurate and appropriately scaffolded, students may gain more opportunities to identify misunderstandings, attempt tasks, and use feedback. Each link in this chain is an assumption that requires evaluation; access to AI does not automatically produce learning.
          </p>

          {/* Theory of change table */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[var(--border)]">
                  <th className="text-left py-3 px-4 font-mono-label">Design input</th>
                  <th className="text-left py-3 px-4 font-mono-label">Immediate mechanism</th>
                  <th className="text-left py-3 px-4 font-mono-label">Possible benefit</th>
                  <th className="text-left py-3 px-4 font-mono-label">Evidence required</th>
                </tr>
              </thead>
              <tbody className="font-serif-body text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4">NCDC outcomes and reviewed subject resources</td>
                  <td className="py-3 px-4">Explanations and tasks are mapped to defined learning objectives</td>
                  <td className="py-3 px-4">Greater relevance to taught content and expected competencies</td>
                  <td className="py-3 px-4">Expert review of objective mapping and item accuracy</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4">Guided explanations and hints</td>
                  <td className="py-3 px-4">Students receive support before or alongside a full solution</td>
                  <td className="py-3 px-4">Improved conceptual understanding and persistence</td>
                  <td className="py-3 px-4">Think-aloud studies, answer analysis, learner interviews</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4">Practice and response feedback</td>
                  <td className="py-3 px-4">Students attempt questions and inspect errors</td>
                  <td className="py-3 px-4">Better problem-solving and transfer to new questions</td>
                  <td className="py-3 px-4">Pre/post measures, independent marking, delayed retention tests</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4">Progress signals</td>
                  <td className="py-3 px-4">Recurring gaps and strengths are summarised</td>
                  <td className="py-3 px-4">More targeted revision and self-regulation</td>
                  <td className="py-3 px-4">Calibration checks and teacher/student usability testing</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Student and teacher feedback</td>
                  <td className="py-3 px-4">The team identifies failure modes and curriculum gaps</td>
                  <td className="py-3 px-4">More reliable and locally appropriate future versions</td>
                  <td className="py-3 px-4">Versioned issue logs and change records</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Early development status */}
        <section id="section-6" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">6. Early development status and available evidence</h2>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            The project has developed an initial version and is moving toward a second version with a cleaner interface and O-Level coverage alongside the earlier A-Level focus. The current product direction includes a tutor interaction loop, practice, question generation, response feedback, and progress-oriented features.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-6">
            The development team reports approximately 500 clicks over a three-month period. This is useful as an early engagement signal, but the meaning of 'click' must be defined before it is cited as a formal usage result. Clicks are not necessarily unique users, active study sessions, completed learning tasks, or successful learning outcomes.
          </p>

          {/* Status table */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[var(--border)]">
                  <th className="text-left py-3 px-4 font-mono-label">Status category</th>
                  <th className="text-left py-3 px-4 font-mono-label">Defensible description</th>
                  <th className="text-left py-3 px-4 font-mono-label">What must not be claimed yet</th>
                </tr>
              </thead>
              <tbody className="font-serif-body text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Existing project assets</td>
                  <td className="py-3 px-4">The application is designed around NCDC learning outcomes and curriculum/textbook materials.</td>
                  <td className="py-3 px-4">That all content is fully accurate, complete, or independently endorsed by NCDC or UNEB.</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Product activity</td>
                  <td className="py-3 px-4">The team reports about 500 clicks over three months.</td>
                  <td className="py-3 px-4">500 students, 500 active learners, or proven educational impact.</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Product capabilities</td>
                  <td className="py-3 px-4">A tutor-and-practice workflow and related features are under development.</td>
                  <td className="py-3 px-4">That adaptive diagnosis or automated marking is consistently reliable without testing.</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Curriculum updates</td>
                  <td className="py-3 px-4">The project intends to review official NCDC/UNEB materials and reflect relevant changes.</td>
                  <td className="py-3 px-4">Real-time automatic synchronisation unless it has been built and verified.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Learning outcomes</td>
                  <td className="py-3 px-4">The proposed benefits are testable hypotheses.</td>
                  <td className="py-3 px-4">Improved UNEB grades or causal learning gains without a suitable evaluation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7: Responsible AI */}
        <section id="section-7" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">7. Responsible AI and data governance</h2>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-6">
            A student-facing educational AI must be designed for the possibility that its answer may be wrong, that a learner may be underage, and that a student's interaction history can reveal learning difficulties or other personal information. UNESCO's guidance supports age-appropriate use, privacy protection, and human-centred validation (Miao & Holmes, 2023). The following requirements should therefore be treated as core product work rather than optional polish.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Accuracy and uncertainty', desc: 'The system should avoid presenting uncertain answers as facts, provide a way to flag errors, and route high-impact or disputed content for human review.' },
              { title: 'Learning before answer completion', desc: 'Where suitable, the tutor should use hints, worked reasoning, checks for understanding, and follow-up practice rather than immediately completing every academic task.' },
              { title: 'Curriculum provenance', desc: 'Subject content and exam-style items should carry source, level, topic, version, and review status. Generated examples must not be misrepresented as official UNEB past-paper questions.' },
              { title: 'Assessment fairness', desc: 'Marking should acknowledge valid alternative methods and partial understanding, while distinguishing a correct final answer from sound reasoning.' },
              { title: 'Privacy and access control', desc: 'Collect only data needed for educational or product-improvement purposes. Clearly explain what is stored and who can review it; restrict developer access, secure stored data, provide appropriate deletion and retention procedures.' },
              { title: 'Student research and survey consent', desc: 'Explain the purpose of feedback collection in age-appropriate language. Avoid requiring names or identifying details unless necessary, and obtain appropriate school, guardian, or ethics permissions where required.' },
            ].map((item) => (
              <div key={item.title} className="card !p-5">
                <h4 className="font-medium text-[var(--text-primary)] mb-2">{item.title}</h4>
                <p className="font-serif-body text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Evaluation framework */}
        <section id="section-8" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">8. Evaluation framework</h2>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-6">
            The next research phase should move from describing a product to testing specific claims. A mixed-methods, staged evaluation is recommended. It should begin with technical and curriculum validation before any claim about learning improvement is made.
          </p>

          <h3 className="font-headline text-xl mb-3">8.1 Stage 1: curriculum and assessment validation</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-6">
            A panel of subject teachers, curriculum specialists, and assessment experts should review a sample of Stellas explanations, generated questions, marking feedback, and progression decisions. Each item should be checked against the relevant learning outcome, content scope, cognitive demand, factual correctness, expected reasoning, and fairness of marking.
          </p>

          <h3 className="font-headline text-xl mb-3">8.2 Stage 2: student usability and experience</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-6">
            Student research should investigate whether the interface is understandable, whether explanations help learners progress, what students do when they do not understand an answer, and how Stellas compares with other tools they use.
          </p>

          <h3 className="font-headline text-xl mb-3">8.3 Stage 3: learning-outcome pilot</h3>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-6">
            A pilot study should use a subject and topic with clearly specified learning outcomes, common assessments, and a feasible comparison design. Where practicable, collect baseline performance, provide a defined period of Stellas-supported study, use an independently marked post-assessment, and test retention after a delay.
          </p>

          <h3 className="font-headline text-xl mb-3">8.4 Recommended measures</h3>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-[var(--border)]">
                  <th className="text-left py-3 px-4 font-mono-label">Area</th>
                  <th className="text-left py-3 px-4 font-mono-label">Example measures</th>
                  <th className="text-left py-3 px-4 font-mono-label">Why it matters</th>
                </tr>
              </thead>
              <tbody className="font-serif-body text-[var(--text-secondary)]">
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Curriculum alignment</td>
                  <td className="py-3 px-4">Share of sampled items correctly mapped; expert-rated coverage</td>
                  <td className="py-3 px-4">Tests whether local grounding is real and traceable</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Answer accuracy</td>
                  <td className="py-3 px-4">Factual correctness; calculation accuracy; hallucination rate</td>
                  <td className="py-3 px-4">Prevents fluent but misleading instruction</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Assessment quality</td>
                  <td className="py-3 px-4">Expert rating of cognitive demand, realism, fairness</td>
                  <td className="py-3 px-4">Tests whether practice reflects the intended competency</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Feedback quality</td>
                  <td className="py-3 px-4">Agreement with human marking; treatment of partial credit</td>
                  <td className="py-3 px-4">Measures whether feedback supports understanding</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Learning</td>
                  <td className="py-3 px-4">Pre/post assessment, transfer, delayed retention</td>
                  <td className="py-3 px-4">Provides evidence beyond clicks and satisfaction</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Engagement</td>
                  <td className="py-3 px-4">Active learners, completed tasks, session frequency</td>
                  <td className="py-3 px-4">Describes use without implying it proves learning</td>
                </tr>
                <tr className="border-b border-[var(--border)]">
                  <td className="py-3 px-4 font-medium">Equity and access</td>
                  <td className="py-3 px-4">Performance across devices, connection quality, school type</td>
                  <td className="py-3 px-4">Checks whether benefits or harms are unevenly distributed</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Safety and privacy</td>
                  <td className="py-3 px-4">Flagged outputs, data access events, deletion requests</td>
                  <td className="py-3 px-4">Monitors trust, protection, and incident handling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 9: Discussion */}
        <section id="section-9" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">9. Discussion</h2>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            Stellas' strongest research rationale is not simply that AI is new or that a general-purpose chatbot is available. It is the proposition that a locally grounded learning assistant can make the relationship between curriculum outcomes, practice, feedback, and next steps more explicit for secondary learners. The intended differentiation is curriculum relevance and formative support: using local curriculum materials to guide explanations and item design, maintaining a reviewed relationship with official assessment updates, and improving the system through structured feedback from students and subject experts.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            This proposition remains open to testing. A curriculum reference layer can reduce certain forms of mismatch, but it does not guarantee accuracy. A language model can misread a question, invent a marking rule, produce a convincing wrong explanation, or fail to recognise a correct alternative method. Human review, robust question testing, transparent uncertainty, and evaluation with real students are therefore central to the product's educational credibility.
          </p>
        </section>

        {/* Section 10: Limitations */}
        <section id="section-10" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">10. Limitations</h2>
          <ul className="space-y-3 font-serif-body text-[var(--text-secondary)] leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1 flex-shrink-0">●</span>
              <span>This is a development-oriented case description, not a peer-reviewed experimental study or a systematic literature review.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1 flex-shrink-0">●</span>
              <span>No controlled student learning-outcome data are available in this draft. No causal claim about grades, mastery, or examination performance is made.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1 flex-shrink-0">●</span>
              <span>The reported figure of approximately 500 clicks over three months comes from the development team and has not been independently audited.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1 flex-shrink-0">●</span>
              <span>The extent of the project's current curriculum mapping, independent validation, update workflow, and data-governance controls must be documented and verified by the team before publication.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1 flex-shrink-0">●</span>
              <span>The paper uses national education indicators and selected policy/research sources; these do not fully represent differences across Ugandan regions, school types, subjects, languages, infrastructure conditions, or learner needs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--accent)] mt-1 flex-shrink-0">●</span>
              <span>New Vision articles are included as examples of public discussion, not as substitutes for peer-reviewed research or official education statistics.</span>
            </li>
          </ul>
        </section>

        {/* Section 11: Conclusion */}
        <section id="section-11" className="mb-12 fade-in">
          <h2 className="font-headline text-2xl mb-4">11. Conclusion</h2>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            Stellas AI is being developed around a locally important goal: helping Ugandan O-Level and A-Level learners access relevant explanations, practise academic skills, and receive feedback in ways that reflect the curriculum and assessment environment they actually face. Official sources show that Uganda's curriculum and assessment framework continues to evolve, while national indicators point to variation in the conditions in which teaching and learning take place.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed mb-4">
            UNESCO's guidance makes clear that AI in education should be human-centred, age-appropriate, privacy-conscious, and evaluated against meaningful outcomes. The next step is not to claim that Stellas has solved these challenges, but to make the design testable.
          </p>
          <p className="font-serif-body text-[var(--text-secondary)] leading-relaxed">
            The team should document the curriculum sources used, create a disciplined NCDC/UNEB update process, validate questions and feedback with experts, protect student research data, and run a carefully designed pilot measuring learning rather than clicks alone. If those steps demonstrate reliable benefits, Stellas may become a useful supplement to teachers and a credible example of context-aware educational AI developed for Uganda. <em>Its value will ultimately depend on evidence, not intention.</em>
          </p>
        </section>

        {/* References */}
        <section id="section-refs" className="mb-16 fade-in">
          <h2 className="font-headline text-2xl mb-6">References</h2>
          <div className="space-y-4 font-serif-body text-sm text-[var(--text-secondary)] leading-relaxed">
            <p>Atibuni, D. Z., Muzaale, T., & Obong Capuc, F. (2024). The challenges of and strategies for competency based assessment by Uganda National Examinations Board. <em>Journal of Curriculum Development, Evaluation, and Education</em>, 1(1), 12–31. <a href="https://doi.org/10.64948/JCDEE.v1.i1.2024.5" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">https://doi.org/10.64948/JCDEE.v1.i1.2024.5</a></p>
            <p>Kyotalengerire, A. (2025, August 12). Students warned against relying on AI for academic work. <em>New Vision</em>. <a href="https://www.newvision.co.ug/category/education/students-warned-against-relying-on-ai-for-aca-NV_216356_092026" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">Link</a></p>
            <p>Miao, F., & Cukurova, M. (2024). AI competency framework for teachers. UNESCO. <a href="https://www.unesco.org/en/articles/ai-competency-framework-teachers" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">Link</a></p>
            <p>Miao, F., & Holmes, W. (2023). Guidance for generative AI in education and research. UNESCO. <a href="https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">Link</a></p>
            <p>Miao, F., Shiohira, K., & Lao, N. (2024). AI competency framework for students. UNESCO. <a href="https://www.unesco.org/en/articles/ai-competency-framework-students" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">Link</a></p>
            <p>Mirembe, J. (n.d.). Govt moves to introduce inclusive AI curriculum for learners. <em>New Vision</em>. <a href="https://www.newvision.co.ug/category/education/govt-moves-to-introduce-inclusive-ai-curricul-NV_222850" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">Link</a></p>
            <p>Ministry of Education and Sports. (2025). <em>The education statistics abstract 2025</em> (Vol. 1). Government of Uganda. <a href="https://www.education.go.ug/wp-content/uploads/2026/01/UGANDAS-EDUCATION-STATISTICAL-ABSTRACT_2025.pdf" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">PDF</a></p>
            <p>Namatende-Sakwa, L., et al. (2025). From a knowledge-based to a competence-based curriculum: Insights into opportunities and threats to implementation in Uganda. <em>Journal of Curriculum Development, Evaluation, and Education</em>. <a href="https://doi.org/10.64948/JCDEE.v1.i2.2025.111" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">https://doi.org/10.64948/JCDEE.v1.i2.2025.111</a></p>
            <p>National Curriculum Development Centre. (n.d.). Lower secondary curriculum embraced. <a href="https://ncdc.go.ug/lower-secondary-curriculum-embraced/" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">Link</a></p>
            <p>National Curriculum Development Centre. (2025, October 8). NCDC unveils aligned A-Level curriculum. <a href="https://ncdc.go.ug/2025/10/08/ncdc-launches-2nd-international-conference-on-curriculum-development-2/" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">Link</a></p>
            <p>National Curriculum Development Centre. (2026, July 27). NCDC releases assessment guidelines to support effective implementation of the advanced secondary curriculum. <a href="https://ncdc.go.ug/2026/07/27/ncdc-releases-assessment-guidelines-to-support-effective-implementation-of-the-advanced-secondary-curriculum/" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">Link</a></p>
            <p>Uganda National Examinations Board. (2026, June 1). UNEB normal registration extended to 30th June 2026. <a href="https://uneb.ac.ug/2026/06/01/uneb-normal-registration-extended-to-30th-june-2026/" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">Link</a></p>
            <p>UNESCO. (2023a). <em>2023 Global Education Monitoring Report: Technology in education: A tool on whose terms?</em> <a href="https://gem-report-2023.unesco.org/" className="text-[var(--accent)] link-underline" target="_blank" rel="noopener">Link</a></p>
          </div>
        </section>

        {/* Citation */}
        <div className="card !bg-[var(--bg-card)] mb-12">
          <p className="font-mono-label mb-2">Cite this paper</p>
          <p className="font-serif-body text-sm text-[var(--text-secondary)]">
            Stellas AI Research and Development Team, Tazon Inc. (2026). <em>Designing a Locally Grounded AI Learning Companion for Uganda's Secondary Education: A development-oriented research paper on curriculum alignment, formative assessment, and responsible artificial intelligence</em>. Working draft, 13 October 2026.
          </p>
        </div>
      </div>
    </article>
  );
}
