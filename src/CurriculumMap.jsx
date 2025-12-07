import { useState } from 'react';

const CurriculumMap = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Python Foundations",
      color: "#3B82F6",
      timeEstimate: "2-3 weeks",
      checkpoint: false,
      steps: [
        { name: "Exercism Python Track", url: "https://exercism.io/tracks/python", time: "2-3 weeks", desc: "Complete these exercises in order:" },
      ],
      substeps: [
        "Basics, Numbers, Bools",
        "Conditionals, Comparisons",
        "Strings & String Methods",
        "Lists & List Methods",
        "Loops",
        "Tuples, Dicts, Sets",
        "Unpacking & Multiple Assignment",
        "Classes",
        "Generators"
      ],
      jobs: []
    },
    {
      id: 2,
      title: "Data Engineering",
      color: "#10B981",
      timeEstimate: "6-8 weeks",
      checkpoint: true,
      checkpointName: "CHECKPOINT 1",
      steps: [
        { name: "Step 2.1: SQL via Odin Project", url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/databases", time: "2-3 weeks", desc: "Complete the full Databases course" },
        { name: "Step 2.2: Sign up for Palantir", url: null, time: "30 mins", desc: "Create accounts:" },
      ],
      substeps: [
        "→ build.palantir.com (free Developer Tier - need credit card for ID only)",
        "→ learn.palantir.com (free learning platform)"
      ],
      palantirCourses: [
        { order: "2.3", name: "Foundry & AIP Builder Foundations", time: "15 mins", desc: "Earns first badge, no Foundry needed", url: "https://learn.palantir.com" },
        { order: "2.4", name: "Speedrun: Your First End-to-End Workflow", time: "60-90 mins", desc: "Build workflow in core Foundry apps", url: "https://learn.palantir.com" },
        { order: "2.5", name: "Deep Dive: Building Your First Pipeline", time: "60-90 mins", desc: "Hands-on pipeline building", url: "https://learn.palantir.com" },
        { order: "2.6", name: "Data Connection", time: "45-60 mins", desc: "Retrieve data from various sources", url: "https://learn.palantir.com" },
        { order: "2.7", name: "Spark Computation (PySpark basics)", time: "60 mins", desc: "Learn PySpark transforms", url: "https://learn.palantir.com" },
        { order: "2.8", name: "Pipeline Builder", time: "60-90 mins", desc: "No-code pipelining tool", url: "https://learn.palantir.com" },
        { order: "2.9", name: "Code Repositories for Python Transforms", time: "60 mins", desc: "PySpark in Code Repositories", url: "https://learn.palantir.com" },
        { order: "2.10", name: "Applied Notional Project", time: "1-2 days", desc: "Build workflow from requirements (capstone)", url: "https://learn.palantir.com" },
      ],
      youtube: [
        { name: "Ontologize: Speedrun Tutorial", url: "https://www.youtube.com/watch?v=f61gXVH-QZE" },
        { name: "Ontologize: Building Your First Pipeline", url: "https://www.youtube.com/watch?v=I9iOqre7gqk" },
        { name: "Ontologize: Data Connection in 10 mins", url: "https://www.youtube.com/watch?v=WCt7dN_-5wg" },
        { name: "Ontologize: Intro to Code Repositories", url: "https://www.youtube.com/watch?v=Etr_hK75iRU" },
      ],
      jobs: [
        "BI Software Engineer (Asplundh - Willow Grove, PA)",
        "Data Engineer, Palantir (PwC - $77k-$202k)",
        "Foundry Developer",
        "Data Engineer"
      ]
    },
    {
      id: 3,
      title: "Data Science Toolkit",
      color: "#8B5CF6",
      timeEstimate: "3-4 weeks",
      checkpoint: true,
      checkpointName: "CHECKPOINT 2",
      steps: [
        { name: "Step 3.1: Zero to Pandas", url: "https://www.youtube.com/watch?v=GPVsHOlRBBI", time: "3-4 weeks", desc: "Start at Lecture 3 (2:17:17). Covers:" },
      ],
      substeps: [
        "NumPy arrays & operations",
        "Pandas DataFrames",
        "Data cleaning (missing values, types)",
        "Filtering, grouping, aggregation",
        "Matplotlib (basic plotting)",
        "Jupyter notebooks"
      ],
      projects: [
        { name: "Step 3.2: Kaggle EDA Project", desc: "Pick any Kaggle dataset. Load → clean → analyze → visualize → write up in Jupyter notebook." }
      ],
      jobs: [
        "Data Analyst",
        "Junior Data Scientist",
        "Business Intelligence Analyst",
        "Analytics Engineer"
      ]
    },
    {
      id: 4,
      title: "ML Training",
      color: "#EC4899",
      timeEstimate: "25-30 weeks",
      checkpoint: true,
      checkpointName: "CHECKPOINT 3",
      steps: [
        { name: "Step 4.1: Fast.ai Part 1", url: "https://course.fast.ai/", time: "8-10 weeks", desc: "8 lessons, top-down approach:" },
      ],
      substeps: [
        "Lessons 1-2: Image classification & deployment → Project: Build & deploy image classifier",
        "Lessons 3-5: Neural net foundations → Project: Neural net from scratch",
        "Lesson 6: Random forests → Project: Kaggle tabular competition",
        "Lessons 7-8: Collaborative filtering & CNNs → Project: Recommendation system",
        "Final: Kaggle image competition + blog post"
      ],
      steps2: [
        { name: "Step 4.2: Micrograd (Karpathy)", url: "https://www.youtube.com/watch?v=VMj-3S1tku0", time: "1-2 weeks", desc: "Build backpropagation from scratch. Watch → take notes → rebuild from notes." },
        { name: "Step 4.3: Fast.ai Part 2", url: "https://course.fast.ai/Lessons/part2.html", time: "8-10 weeks", desc: "From Deep Learning Foundations to Stable Diffusion. Go from user to builder:" },
      ],
      substeps2: [
        "Lessons 9-10: Stable Diffusion, diving deeper",
        "Lesson 11: Matrix multiplication from scratch",
        "Lessons 13-14: Backpropagation & MLP from scratch",
        "Lesson 16: The Learner framework (Fast.ai internals)",
        "Lessons 17-18: Initialization, normalization, ResNets",
        "Lessons 24-25: Attention, Transformers, Latent diffusion"
      ],
      steps3: [
        { name: "Step 4.4: Andrew Ng Deep Learning", url: "https://www.coursera.org/specializations/deep-learning", time: "6-8 weeks", desc: "5 courses - fills in the 'why':" },
      ],
      substeps3: [
        "Course 1: Neural Networks and Deep Learning",
        "Course 2: Hyperparameter Tuning, Regularization",
        "Course 3: Structuring ML Projects",
        "Course 4: CNNs",
        "Course 5: Sequence Models"
      ],
      jobs: [
        "Junior ML Engineer",
        "Applied ML Engineer",
        "Computer Vision Engineer",
        "AI/ML Developer"
      ]
    },
    {
      id: 5,
      title: "AI for Medicine",
      color: "#06B6D4",
      timeEstimate: "6-8 weeks",
      checkpoint: true,
      checkpointName: "CHECKPOINT 4",
      steps: [
        { name: "Step 5.1: AI for Medicine Specialization", url: "https://www.coursera.org/specializations/ai-for-medicine", time: "6-8 weeks", desc: "3 courses from DeepLearning.AI:" },
      ],
      substeps: [
        "Course 1: X-ray classification, 3D MRI segmentation",
        "Course 2: Prognosis with tree-based models",
        "Course 3: Treatment effects, NLP on radiology reports"
      ],
      projects: [
        { name: "Step 5.2: Medical Imaging Project + Blog Post", desc: "Independent project on chest X-ray, brain MRI, etc. Classification or segmentation. Write up as portfolio piece." }
      ],
      jobs: [
        "Healthcare ML Engineer",
        "Medical Imaging ML Engineer",
        "Clinical AI Developer",
        "Research Software Developer (Healthcare)"
      ]
    },
    {
      id: 6,
      title: "Capstone + MedARC",
      color: "#1F2937",
      timeEstimate: "6-8 weeks",
      checkpoint: true,
      checkpointName: "CHECKPOINT 5",
      steps: [
        { name: "Step 6.1: Join MedARC", url: "https://discord.gg/tVR4TWnRM9", time: "Ongoing", desc: "Open research collective:" },
      ],
      substeps: [
        "Join MedARC Discord",
        "Introduce yourself in #path-fm",
        "Attend Friday meetings (2pm EST) to observe",
        "Ask project lead (Paul Scotti) for a task"
      ],
      projects: [
        { name: "Step 6.2: Full Medical Imaging Project", desc: "Brain tumor segmentation, retinal disease, or bone fracture. Use raw DICOM/NIfTI files, no pre-processed PNGs. You handle: download → parse → clean → split → train → deploy." },
        { name: "Step 6.3: MedARC Contribution", desc: "Contribute to path-fm or other projects. Work toward ICML/NeurIPS co-authorship." }
      ],
      jobs: [
        "Medical Imaging ML Researcher",
        "Healthcare AI Research Engineer",
        "ML Scientist (Medical Imaging)",
        "Pathology AI Engineer"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          ML Curriculum with Exit Ramps
        </h1>
        <p className="text-gray-400 text-center mb-2">
          Do this → then this → then this. Each checkpoint = employable.
        </p>
        <p className="text-green-400 text-center mb-8 text-sm">
          🟢 CHECKPOINT = Job-ready. Apply while continuing to learn.
        </p>

        {sections.map((section) => (
          <div key={section.id} className="mb-8">
            {/* Checkpoint Banner */}
            {section.checkpoint && (
              <div className="bg-green-500 text-black font-bold px-4 py-2 rounded-t-xl text-center">
                {section.checkpointName} - EMPLOYABLE ({section.timeEstimate} from start)
              </div>
            )}

            {/* Section Header */}
            <button
              type="button"
              className={`w-full p-4 cursor-pointer ${section.checkpoint ? 'rounded-b-xl' : 'rounded-xl'} text-left`}
              style={{ backgroundColor: section.color }}
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              aria-expanded={expandedSection === section.id}
            >
              <div className="flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">{section.id}</span>
                  <span className="text-xl font-semibold">{section.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm opacity-80">{section.timeEstimate}</span>
                  <span className="text-xl">{expandedSection === section.id ? '▼' : '▶'}</span>
                </div>
              </div>
            </button>

            {/* Expanded Content */}
            {expandedSection === section.id && (
              <div className="bg-gray-800 border-2 border-t-0 rounded-b-xl p-6" style={{ borderColor: section.color }}>

                {/* Main Steps */}
                {section.steps && section.steps.map((step, i) => (
                  <div key={i} className="mb-6">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">STEP</span>
                      {step.url ? (
                        <a href={step.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">
                          {step.name}
                        </a>
                      ) : (
                        <span className="text-white font-semibold">{step.name}</span>
                      )}
                      <span className="text-gray-400 text-sm">({step.time})</span>
                    </div>
                    <p className="text-gray-300 ml-16 mb-2">{step.desc}</p>

                    {/* Substeps after first step */}
                    {i === 0 && section.substeps && (
                      <ul className="ml-16 space-y-1">
                        {section.substeps.map((sub, j) => (
                          <li key={j} className="text-gray-400 flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Palantir Courses (for section 2) */}
                {section.palantirCourses && (
                  <div className="mb-6">
                    <h4 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                      <span>📚</span> Palantir Foundry Courses (do in order):
                    </h4>
                    <div className="space-y-2 ml-4">
                      {section.palantirCourses.map((course, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-700 p-3 rounded-lg">
                          <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded min-w-fit">
                            {course.order}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-white font-medium">{course.name}</span>
                              <span className="text-gray-400 text-sm">({course.time})</span>
                            </div>
                            <p className="text-gray-400 text-sm">{course.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* YouTube supplements */}
                {section.youtube && (
                  <div className="mb-6">
                    <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                      <span>▶️</span> Free YouTube Tutorials (optional but helpful):
                    </h4>
                    <div className="grid grid-cols-2 gap-2 ml-4">
                      {section.youtube.map((vid, i) => (
                        <a key={i} href={vid.url} target="_blank" rel="noopener noreferrer"
                           className="text-red-300 text-sm hover:underline">
                          {vid.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional steps (for section 4) */}
                {section.steps2 && section.steps2.map((step, i) => (
                  <div key={i} className="mb-6">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">STEP</span>
                      <a href={step.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">
                        {step.name}
                      </a>
                      <span className="text-gray-400 text-sm">({step.time})</span>
                    </div>
                    <p className="text-gray-300 ml-16 mb-2">{step.desc}</p>

                    {i === 1 && section.substeps2 && (
                      <ul className="ml-16 space-y-1">
                        {section.substeps2.map((sub, j) => (
                          <li key={j} className="text-gray-400 flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Third set of steps (for section 4 - Andrew Ng after Part 2) */}
                {section.steps3 && section.steps3.map((step, i) => (
                  <div key={i} className="mb-6">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">STEP</span>
                      <a href={step.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline">
                        {step.name}
                      </a>
                      <span className="text-gray-400 text-sm">({step.time})</span>
                    </div>
                    <p className="text-gray-300 ml-16 mb-2">{step.desc}</p>

                    {section.substeps3 && (
                      <ul className="ml-16 space-y-1">
                        {section.substeps3.map((sub, j) => (
                          <li key={j} className="text-gray-400 flex items-start gap-2">
                            <span className="text-green-400">✓</span>
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Projects */}
                {section.projects && (
                  <div className="mb-6">
                    {section.projects.map((proj, i) => (
                      <div key={i} className="flex items-start gap-3 mb-3">
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">PROJECT</span>
                        <div>
                          <span className="text-orange-300 font-medium">{proj.name}</span>
                          <p className="text-gray-400 text-sm">{proj.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Jobs */}
                {section.jobs && section.jobs.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                      <span>💼</span> Jobs You Can Apply For After This Checkpoint:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {section.jobs.map((job, i) => (
                        <span key={i} className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">
                          {job}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Summary */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mt-8">
          <h3 className="text-xl font-bold text-white mb-4">Quick Reference</h3>
          <div className="space-y-3 text-gray-300">
            <div className="flex gap-4">
              <span className="text-blue-400 font-bold w-32">Checkpoint 1:</span>
              <span>Python + SQL + Palantir Foundry → Data Engineering jobs (~8-11 weeks)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-purple-400 font-bold w-32">Checkpoint 2:</span>
              <span>+ pandas/numpy/viz → Data Analyst jobs (~11-15 weeks)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-pink-400 font-bold w-32">Checkpoint 3:</span>
              <span>+ Fast.ai Part 1 & 2 + Deep Learning → ML Engineer jobs (~36-45 weeks)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-cyan-400 font-bold w-32">Checkpoint 4:</span>
              <span>+ AI for Medicine → Healthcare ML jobs (~42-53 weeks)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-400 font-bold w-32">Checkpoint 5:</span>
              <span>+ Capstone + MedARC → Research roles (~48-61 weeks)</span>
            </div>
          </div>
          
          <p className="text-green-400 mt-6 font-semibold text-center">
            Keep going until someone hires you. Every checkpoint makes you more valuable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurriculumMap;
