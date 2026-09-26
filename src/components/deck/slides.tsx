import type { ReactNode } from "react";
import {
  Globe,
  Compass,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  RefreshCw,
  MapPin,
  Award,
  Users,
  Scale,
  Flame,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Target,
  BookOpen,
  Share2,
  TrendingUp,
} from "lucide-react";
import { SlideLayout, Card, Bullet, Badge, Kicker } from "./SlideLayout";

export type SlideDef = {
  id: string;
  title: string;
  notes?: string;
  render: (p: { index: number; total: number }) => ReactNode;
};

export const slides: SlideDef[] = [
  /* ==========================================================================
     SLIDE 1: COVER
     ========================================================================== */
  {
    id: "cover",
    title: "The Long Game: Reinventing Yourself for a Borderless Future",
    notes:
      "WELCOME & OPENING HOOK: Welcome the NOUN Cowrywise Ambassadors and participants to Day 4. Congratulate them on reaching the grand finale. State clearly: Tonight is about closing the gap between classroom ambition and borderless reality. Emphasize the core thesis: 'Landing the opportunity is the beginning, not the finish line.'",
    render: () => (
      <div className="slide-content bg-[#FAF7EE] text-[#0A1128]">
        <div className="absolute inset-0 grid-paper" />
        <div className="relative flex h-full flex-col justify-between px-[90px] py-[65px]">
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="slide-kicker brut-flat border-[3.5px] border-[#0A1128] bg-[#0052FF] px-6 py-2 uppercase tracking-widest text-white font-bold shadow-[4px_4px_0_0_#0A1128]">
                NOUN AMBASSADORS · BOOTCAMP FINALE
              </span>
              <span className="slide-kicker brut-flat border-[3.5px] border-[#0A1128] bg-white px-5 py-2 uppercase tracking-wider text-[#0052FF] font-bold shadow-[4px_4px_0_0_#0A1128]">
                DAY 4: PERSONAL BRAND &amp; GLOBAL OPPORTUNITIES
              </span>
            </div>
            <span className="slide-caption font-mono font-bold tracking-wider text-[#0052FF] uppercase">
              GROWTH THROUGH LEARNING
            </span>
          </div>

          {/* Main Title Hero */}
          <div className="my-auto max-w-[1700px]">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-[#0052FF] bg-[#EBF2FF] px-5 py-1.5 text-sm font-bold uppercase tracking-widest text-[#0052FF]">
              <Sparkles className="h-4 w-4" /> Keynote Presentation
            </div>
            <h1 className="slide-title-lg text-[#0A1128] leading-[0.98]">
              The Long Game:
              <br />
              <span className="text-[#0052FF]">Reinventing Yourself</span> for a Borderless Future
            </h1>
            <div className="mt-8 inline-block brut-blue bg-[#0052FF] px-10 py-5 text-white">
              <p className="slide-subtitle text-white font-display" style={{ fontSize: 36 }}>
                "Landing the opportunity is the beginning, not the finish line."
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <img
                src="/sheriffdeen.png"
                alt="Sheriffdeen Saula"
                className="h-[76px] w-[76px] rounded-full border-[3.5px] border-[#0A1128] object-cover shadow-[4px_4px_0_0_#0A1128]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <div>
                <p className="font-display text-3xl font-extrabold tracking-tight text-[#0A1128]">
                  Sheriffdeen Saula
                </p>
                <p className="text-lg font-semibold text-[#0052FF] uppercase tracking-wider">
                  Software Engineer · Builder · Strategist
                </p>
              </div>
            </div>
          </div>

          {/* Footer Pills */}
          <div className="flex items-end justify-between border-t-[3.5px] border-[#0A1128] pt-4">
            <div className="flex gap-4">
              {["GLOBAL OPPORTUNITY", "MY PHILOSOPHY", "THE 2 GATEWAYS", "GLOCAL TO GLOBAL", "REINVENTION"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="slide-badge brut-flat border-[3px] border-[#0A1128] bg-white px-5 py-2 uppercase tracking-widest text-xs font-bold shadow-[3px_3px_0_0_#0A1128]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <span className="slide-caption font-bold text-[#0A1128] opacity-80">
              Live on Google Meet · 7:00 PM
            </span>
          </div>
        </div>
      </div>
    ),
  },

  /* ==========================================================================
     SLIDE 2: WHY YOUTHS SHOULD CHASE GLOBAL OPPORTUNITIES
     ========================================================================== */
  {
    id: "need-for-global-opportunities",
    title: "Why Youths Should Chase Global Opportunities: A Tale of Two Billionaires",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="01: The Debate & Strategic Imperative">
        <div className="flex h-full flex-col justify-between gap-4">
          {/* Header */}
          <div className="flex items-center justify-between shrink-0">
            <div>
              <h2 className="slide-title" style={{ fontSize: 62 }}>
                Why Youths Should Chase Global Opportunities
              </h2>
              <p className="slide-subtitle mt-1 text-[#0052FF] font-bold" style={{ fontSize: 30 }}>
                The Comparison of Two Billionaires: Iyinoluwa Aboyeji x Atedo Peterside
              </p>
            </div>
            <a
              href="https://www.instagram.com/reels/DbKXWU7omXs/"
              target="_blank"
              rel="noreferrer"
              className="deck-ui-btn px-6 py-3.5 bg-[#0052FF] text-white hover:bg-[#0039C7] text-base font-extrabold shadow-[5px_5px_0_0_#0A1128] shrink-0"
            >
              <ExternalLink className="h-5 w-5 mr-2" /> Watch Case Reel ↗
            </a>
          </div>

          {/* Top: The Two Perspectives (Expanded) */}
          <div className="grid grid-cols-12 gap-7 flex-1 items-stretch">
            <Card className="col-span-6 p-7 flex flex-col justify-between" tone="paper">
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A1128]/20">
                  <span className="font-mono text-sm font-extrabold uppercase tracking-widest text-[#0052FF]">
                    01 · The Builder's Critique
                  </span>
                  <span className="font-display font-extrabold text-base text-[#0A1128]">
                    Iyinoluwa Aboyeji (Andela / Unicorns)
                  </span>
                </div>
                <p className="font-display text-3xl font-extrabold text-[#0A1128] mt-4 leading-snug">
                  "Youths have become influencers and performing artists—not builders."
                </p>
                <p className="text-xl text-[#0A1128]/85 mt-3 leading-relaxed font-semibold">
                  Subjecting ourselves to mediocrity, chasing digital validation, and mistakenly believing there is no longer value in deep craft and excellence.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-[#0A1128]/20">
                <span className="text-sm font-mono font-bold text-red-600 uppercase">
                  Diagnosis: The trap of performative noise over tangible creation.
                </span>
              </div>
            </Card>

            <Card className="col-span-6 p-7 flex flex-col justify-between" tone="paper">
              <div>
                <div className="flex items-center justify-between pb-3 border-b-2 border-[#0A1128]/20">
                  <span className="font-mono text-sm font-extrabold uppercase tracking-widest text-[#0052FF]">
                    02 · The Systemic Reality
                  </span>
                  <span className="font-display font-extrabold text-base text-[#0A1128]">
                    Atedo Peterside (Stanbic IBTC)
                  </span>
                </div>
                <p className="font-display text-3xl font-extrabold text-[#0A1128] mt-4 leading-snug">
                  "The current governance system actively stifles youth growth."
                </p>
                <p className="text-xl text-[#0A1128]/85 mt-3 leading-relaxed font-semibold">
                  The older generation who control governance and institutions have closed the ladder, failing to provide the enabling environment they enjoyed decades ago.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-[#0A1128]/20">
                <span className="text-sm font-mono font-bold text-[#0052FF] uppercase">
                  Diagnosis: The structural ceiling that forces us to look beyond borders.
                </span>
              </div>
            </Card>
          </div>

          {/* Bottom: Avenues for Corrective Action (WIDENED & HIGH LEGIBILITY) */}
          <div className="p-7 bg-white border-[4px] border-[#0A1128] shadow-[10px_10px_0_0_#0052FF] flex flex-col justify-between shrink-0">
            <div className="flex items-center justify-between pb-3 mb-4 border-b-[3px] border-[#0A1128]/20">
              <span className="font-mono text-sm font-extrabold uppercase tracking-wider text-[#0052FF]">
                The Critique Is Not Condemnatory — It Is A Blueprint For Systemic Transition
              </span>
              <span className="text-xs font-mono font-extrabold text-[#0A1128]/80 uppercase">
                3 Imperative Levers For Our Generation
              </span>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="p-5 bg-[#FAF7EE] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#0052FF] text-white font-mono font-extrabold text-xs">
                    01
                  </span>
                  <span className="font-mono text-xs font-black text-[#0052FF] tracking-wider uppercase">
                    EXPRESSION → INTROSPECTION
                  </span>
                </div>
                <p className="text-base font-bold text-[#0A1128] leading-snug mt-1">
                  Moving past superficial anger and complaining on social media toward deep introspection, structural planning, and securing local systems.
                </p>
              </div>

              <div className="p-5 bg-[#FAF7EE] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#0052FF] text-white font-mono font-extrabold text-xs">
                    02
                  </span>
                  <span className="font-mono text-xs font-black text-[#0052FF] tracking-wider uppercase">
                    COALITION OF THE WILLING
                  </span>
                </div>
                <p className="text-base font-bold text-[#0A1128] leading-snug mt-1">
                  Abandoning performative rooms and youth confabs in favor of working directly with trusted peers to build hard infrastructure and economic value.
                </p>
              </div>

              <div className="p-5 bg-[#FAF7EE] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#0052FF] text-white font-mono font-extrabold text-xs">
                    03
                  </span>
                  <span className="font-mono text-xs font-black text-[#0052FF] tracking-wider uppercase">
                    TAKING OWNERSHIP
                  </span>
                </div>
                <p className="text-base font-bold text-[#0A1128] leading-snug mt-1">
                  Accepting that older leadership will pass down broken systems—making it our imperative duty to construct functional institutions and long-term assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 3: PERSONAL PHILOSOPHY OF CHANGE
     ========================================================================== */
  {
    id: "philosophy-of-change",
    title: "Personal Introduction: My Philosophy of Change",
    notes:
      "STORYTELLING & GROUNDING: Share your background as a software engineer and builder. Introduce your personal philosophy of change: 'Change is not an accident of fate; it is an engineering discipline.' When you understand that systems are created by people no smarter than you, you stop asking for permission. Explain that your pursuit of global opportunities isn't about running away from home—it's about gathering leverage and tools to build sustainable systems back home.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="02: Grounding & Philosophy">
        <div>
          <h2 className="slide-title">
            My Philosophy of Change:
            <span className="text-[#0052FF] ml-3">Engineering Agency</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            How a framework of systemic change dictates my pursuit of global opportunities.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          {/* Left: Philosophy Core */}
          <Card className="col-span-5 p-8 flex flex-col justify-between" tone="deep">
            <div>
              <div className="inline-block border border-white/30 bg-white/10 px-4 py-1 font-mono text-xs uppercase tracking-widest text-[#FAF7EE]">
                Core Axiom
              </div>
              <blockquote className="mt-6 font-display text-3xl font-extrabold leading-snug text-white">
                "Change is not something you passively wait for. Change is an engineering discipline."
              </blockquote>
              <p className="mt-6 text-lg text-white/85 leading-relaxed">
                Every broken system—from outdated curriculums to fractured supply chains—was designed by ordinary people. Which means it can be re-engineered by anyone with the right leverage, tools, and persistence.
              </p>
            </div>
            <div className="rounded border-2 border-white/30 bg-white/5 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-white/70">
                Sheriffdeen Saula · Builder's Mindset
              </p>
            </div>
          </Card>

          {/* Right: 3 Pillars of Change */}
          <div className="col-span-7 flex flex-col justify-between gap-4">
            <Card className="p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#0052FF] text-white px-3 py-1 font-mono font-bold text-sm">01</span>
                <h4 className="font-display text-2xl font-bold text-[#0A1128]">
                  Agency Over Circumstance
                </h4>
              </div>
              <p className="slide-body mt-2 text-[#0A1128]/85 text-xl">
                You cannot control where your classroom is situated, but you have 100% jurisdiction over what you build, what you write, and what you ship onto the internet today.
              </p>
            </Card>

            <Card className="p-6 flex-1 flex flex-col justify-center" tone="soft">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#0052FF] text-white px-3 py-1 font-mono font-bold text-sm">02</span>
                <h4 className="font-display text-2xl font-bold text-[#0052FF]">
                  Global Leverage for Local Impact
                </h4>
              </div>
              <p className="slide-body mt-2 text-[#0A1128]/85 text-xl">
                Seeking global opportunities is not about abandonment. It is about acquiring global capital, mental models, and technical leverage to solve stubborn local problems.
              </p>
            </Card>

            <Card className="p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-[#0052FF] text-white px-3 py-1 font-mono font-bold text-sm">03</span>
                <h4 className="font-display text-2xl font-bold text-[#0A1128]">
                  Compounding Proof-of-Work
                </h4>
              </div>
              <p className="slide-body mt-2 text-[#0A1128]/85 text-xl">
                Trust is not granted by intentions; it is earned through tangible artifacts. When your proof-of-work is undeniable, opportunities seek you out.
              </p>
            </Card>
          </div>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 4: THE MEANS TO ACCESS - THE 2 DIVISIONS
     ========================================================================== */
  {
    id: "the-two-divisions",
    title: "The Means to Access: The 2 Divisions of Global Opportunity",
    notes:
      "FRAMEWORK BREAKDOWN: Distinguish clearly between the two primary highways to global access. Division 1: The Skill/Academic Route (Hard craftsmanship, software engineering, research, scholarships, fellowships like Mastercard/Chevening). Division 2: The Social Impact Route (Community organizing, climate action, policy, UN youth councils, YALI, Millennium Fellowship). Emphasize: 'The magic happens when you merge both. A technical builder who understands social impact is an unstoppable global force.'",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="03: Access Vehicles">
        <div>
          <h2 className="slide-title">
            The Two Gateways:
            <span className="text-[#0052FF] ml-3">Skill/Academic vs. Social Impact</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Every global opportunity enters through one of these two doors—or their intersection.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          {/* Route A: Skill / Academic */}
          <Card className="col-span-6 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-[#0052FF] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
                  Division 01
                </span>
                <GraduationCap className="h-8 w-8 text-[#0052FF]" />
              </div>
              <h3 className="font-display text-3xl font-extrabold text-[#0A1128] mt-4">
                The Skill &amp; Academic Route
              </h3>
              <p className="text-base font-semibold text-[#0052FF] uppercase tracking-wider mt-1">
                Currency: Technical Mastery &amp; Intellectual Rigor
              </p>

              <div className="mt-6 space-y-3">
                <div className="p-3 bg-[#FAF7EE] border-2 border-[#0A1128]/20 rounded">
                  <p className="font-bold text-base text-[#0A1128]">Primary Vehicles:</p>
                  <p className="text-sm text-[#0A1128]/80 mt-1">
                    Software engineering, data science, product design, international scholarships (Chevening, Erasmus Mundus, Rhodes), technical research &amp; labs.
                  </p>
                </div>
                <div className="p-3 bg-[#FAF7EE] border-2 border-[#0A1128]/20 rounded">
                  <p className="font-bold text-base text-[#0A1128]">How You Qualify:</p>
                  <p className="text-sm text-[#0A1128]/80 mt-1">
                    GitHub repositories, live deployed apps, publications, academic distinction, algorithmic proficiency, verifiable domain expertise.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-4 mt-4">
              <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">
                Focus: Solve hard problems with undeniable technical competence.
              </span>
            </div>
          </Card>

          {/* Route B: Social Impact */}
          <Card className="col-span-6 p-8 flex flex-col justify-between" tone="soft">
            <div>
              <div className="flex items-center justify-between">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-white px-4 py-1.5 text-xs font-bold text-[#0052FF] uppercase tracking-wider border-[#0A1128]">
                  Division 02
                </span>
                <HeartHandshake className="h-8 w-8 text-[#0052FF]" />
              </div>
              <h3 className="font-display text-3xl font-extrabold text-[#0052FF] mt-4">
                The Social Impact Route
              </h3>
              <p className="text-base font-semibold text-[#0A1128] uppercase tracking-wider mt-1">
                Currency: Community Mobilization &amp; Measurable Change
              </p>

              <div className="mt-6 space-y-3">
                <div className="p-3 bg-white border-2 border-[#0A1128]/20 rounded">
                  <p className="font-bold text-base text-[#0A1128]">Primary Vehicles:</p>
                  <p className="text-sm text-[#0A1128]/80 mt-1">
                    Campus initiatives (Cowrywise Ambassadors), UN Sustainable Development Goals (SDGs), Millennium Fellowship, YALI, climate advocacy, policy councils.
                  </p>
                </div>
                <div className="p-3 bg-white border-2 border-[#0A1128]/20 rounded">
                  <p className="font-bold text-base text-[#0A1128]">How You Qualify:</p>
                  <p className="text-sm text-[#0A1128]/80 mt-1">
                    Documented beneficiary impact, campaigns led, communities engaged, policy papers, advocacy data gathered, volunteer leadership.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-4 mt-4">
              <span className="text-xs font-mono font-bold text-[#0A1128] uppercase">
                Focus: Solve human problems with empathy, mobilization &amp; evidence.
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 5: PERSONAL BRANDING DEMYSTIFIED
     ========================================================================== */
  {
    id: "personal-branding-demystified",
    title: "Personal Branding: What It Actually Means",
    notes:
      "DISPEL THE MYTH: Ask the audience: 'What do you think of when you hear Personal Brand?' Many students think it means posting motivational quotes or dancing on video. Clarify: Your personal brand is your REPUTATION AT SCALE. It is: Clarity of Value + Consistency of Execution + Public Evidence. If someone searches your name right now on Google, what appears? Confusion, silence, or clear proof of competence?",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="04: Personal Branding">
        <div>
          <h2 className="slide-title">
            Personal Branding:
            <span className="text-[#0052FF] ml-3">Signal Over Noise</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            It is not self-promotion or vanity metrics. It is your reputation operating at internet scale.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-5 p-8 flex flex-col justify-between" tone="paper">
            <div>
              <Kicker tone="white">What It IS NOT</Kicker>
              <ul className="mt-6 space-y-4">
                <Bullet tone="dark">
                  <strong>Not Vanity Metrics:</strong> Having 10,000 followers while nobody knows what specific problem you can actually solve.
                </Bullet>
                <Bullet tone="dark">
                  <strong>Not Inauthentic Hype:</strong> Calling yourself a "thought leader" or "CEO of 5 ventures" before shipping a single real product.
                </Bullet>
                <Bullet tone="dark">
                  <strong>Not Generic Reposting:</strong> Copy-pasting inspirational quotes without any original perspective or lived struggle.
                </Bullet>
              </ul>
            </div>
            <div className="bg-[#FAF7EE] border-2 border-[#0A1128] p-4 brut-sm">
              <p className="font-mono text-sm font-bold text-[#0A1128]">
                "Noise fades fast. Artifacts and outcomes echo forever."
              </p>
            </div>
          </Card>

          <Card className="col-span-7 p-8 flex flex-col justify-between" tone="blue">
            <div>
              <div className="flex items-center justify-between">
                <span className="brut-flat border-[3px] border-white bg-white text-[#0052FF] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0_0_#000]">
                  The 3-Pillar Definition
                </span>
                <Sparkles className="h-8 w-8 text-white" />
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-white text-[#0A1128] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                  <h4 className="font-display text-xl font-extrabold text-[#0052FF]">
                    1. Clarity of Value
                  </h4>
                  <p className="text-sm mt-1 text-[#0A1128]/90 font-medium">
                    Can a recruiter, professor, or collaborator understand what you do and what value you provide in under 10 seconds?
                  </p>
                </div>

                <div className="p-4 bg-white text-[#0A1128] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                  <h4 className="font-display text-xl font-extrabold text-[#0052FF]">
                    2. Undeniable Proof-of-Work
                  </h4>
                  <p className="text-sm mt-1 text-[#0A1128]/90 font-medium">
                    Evidence you have built: articles written, repositories coded, communities led, case studies published, data collected.
                  </p>
                </div>

                <div className="p-4 bg-white text-[#0A1128] border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                  <h4 className="font-display text-xl font-extrabold text-[#0052FF]">
                    3. Predictability of Character
                  </h4>
                  <p className="text-sm mt-1 text-[#0A1128]/90 font-medium">
                    Do you deliver on time? Are you proactive in your communication? Do people trust your word when you're 6,000 miles away?
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/30 pt-3">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-white/90">
                Personal Brand = What people say about your competence when you leave the Google Meet room.
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 6: SELF-INVESTMENT ENGINE
     ========================================================================== */
  {
    id: "self-investment-engine",
    title: "Self-Investment: Learning, Consistency, and Learning Again",
    notes:
      "TACTICAL ADVICE: Talk about the half-life of skills. Frameworks come and go (React, Next.js, AI wrappers, tools). If you stop learning once you finish school or land a job, you will become obsolete in 24 months. Introduce the 'Re-skilling Loop': Learn -> Ship -> Unlearn -> Re-learn. Emphasize consistency over intensity: 1 hour of focused building every single day beats a 15-hour cram session once a month.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="05: Continuous Reinvention">
        <div>
          <h2 className="slide-title">
            The Self-Investment Engine:
            <span className="text-[#0052FF] ml-3">The Compounding Flywheel</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            In a fast-moving borderless economy, the only sustainable advantage is the velocity of your learning.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-4 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-[#EBF2FF] border-2 border-[#0A1128]">
                  <BookOpen className="h-6 w-6 text-[#0052FF]" />
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0A1128]">
                  01. Learn in Public
                </h3>
              </div>
              <p className="slide-body mt-4 text-[#0A1128]/85 text-lg">
                Escape "Tutorial Hell". Stop watching 40-hour video courses without writing a line of your own code or drafting your own proposal.
              </p>
              <div className="mt-4 bg-[#FAF7EE] border-l-4 border-[#0052FF] p-3 text-sm font-semibold">
                Rule: For every 1 hour of consumption, spend 2 hours building an artifact.
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">Stage 1: Input into Artifact</span>
            </div>
          </Card>

          <Card className="col-span-4 p-8 flex flex-col justify-between" tone="soft">
            <div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-[#0052FF] border-2 border-[#0A1128] text-white">
                  <TrendingUp className="h-6 w-6 text-white" />
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0052FF]">
                  02. Ruthless Consistency
                </h3>
              </div>
              <p className="slide-body mt-4 text-[#0A1128]/85 text-lg">
                Consistency is not about 14-hour burnout sprints. It is about never letting the streak break. Showing up day after day when nobody is clapping.
              </p>
              <div className="mt-4 bg-white border-l-4 border-[#0A1128] p-3 text-sm font-semibold">
                The 1% Rule: Compounding 1% daily growth yields 37x improvement over 365 days.
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0A1128] uppercase">Stage 2: Compounding Leverage</span>
            </div>
          </Card>

          <Card className="col-span-4 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-[#FAF7EE] border-2 border-[#0A1128]">
                  <RefreshCw className="h-6 w-6 text-[#0052FF]" />
                </span>
                <h3 className="font-display text-2xl font-bold text-[#0A1128]">
                  03. Unlearning &amp; Re-skilling
                </h3>
              </div>
              <p className="slide-body mt-4 text-[#0A1128]/85 text-lg">
                The skills that got you your first role or campus leadership post will NOT keep you relevant in 3 years. You must ruthlessly reinvent your stack.
              </p>
              <div className="mt-4 bg-[#FAF7EE] border-l-4 border-[#0052FF] p-3 text-sm font-semibold">
                Adaptability: Be loyal to your problem-solving mission, not to a single programming language or title.
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">Stage 3: Perpetual Evolution</span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 7: GLOCAL TO GLOBAL: THE UN AMBITION FALLACY
     ========================================================================== */
  {
    id: "glocal-to-global",
    title: "Going GLOCAL to GLOBAL: The UN Ambition Without the Groundwork",
    notes:
      "A MAJOR PUNCHLINE OF THE NIGHT: Deliver this with candor and tough love. Too many Nigerian youths want to speak at the United Nations General Assembly, hold international fellowship titles, or become global NGO directors—yet they haven't volunteered at their local LGA, haven't solved a problem on their campus, or haven't published a single case study of grassroots work. Global institutions are looking for operatives with SOIL ON THEIR SHOES. If you can't organize 20 students in your university department, how do you expect to lead a global coalition?",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="06: The Groundwork Imperative">
        <div>
          <h2 className="slide-title">
            Going GLOCAL to GLOBAL:
            <span className="text-[#0052FF] ml-3">The UN Ambition Trap</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Everyone wants to address the United Nations, but nobody wants to fix the gutter on their street.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-6 p-8 flex flex-col justify-between" tone="deep">
            <div>
              <div className="flex items-center gap-3">
                <span className="brut-flat border border-white/30 bg-red-500/20 text-red-200 px-3 py-1 font-mono text-xs uppercase font-bold">
                  The Fallacy
                </span>
              </div>
              <h3 className="font-display text-3xl font-extrabold text-white mt-4">
                The "Abstract Globalist" Trap
              </h3>
              <p className="text-white/80 mt-3 text-lg leading-relaxed">
                Applying to high-profile international programs with buzzwords: *"Passionate youth leader fighting climate change and poverty globally."*
              </p>

              <div className="mt-6 space-y-3">
                <div className="bg-white/10 border border-white/20 p-4 rounded">
                  <p className="font-bold text-white text-base">The Fatal Flaw:</p>
                  <p className="text-sm text-white/80 mt-1">
                    Zero empirical proof. No localized community impact data. No track record of dealing with real-world administrative or logistical friction.
                  </p>
                </div>
                <div className="bg-white/10 border border-white/20 p-4 rounded">
                  <p className="font-bold text-white text-base">What Selectors See:</p>
                  <p className="text-sm text-white/80 mt-1">
                    An application looking for a trophy, not a problem-solver equipped with grit and evidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 pt-3">
              <span className="text-xs font-mono text-red-300 font-bold uppercase">
                Diagnosis: Ambition without local grounding is just daydreams.
              </span>
            </div>
          </Card>

          <Card className="col-span-6 p-8 flex flex-col justify-between" tone="card">
            <div>
              <div className="flex items-center gap-3">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-[#0052FF] text-white px-3 py-1 font-mono text-xs uppercase font-bold">
                  The Glocal Playbook
                </span>
              </div>
              <h3 className="font-display text-3xl font-extrabold text-[#0052FF] mt-4">
                Start in the Dirt, Scale to the World
              </h3>
              <p className="text-[#0A1128]/85 mt-3 text-lg leading-relaxed">
                Global selectors and international firms don't want armchair theorists. They look for operators with **mud on their boots**.
              </p>

              <ul className="mt-6 space-y-4">
                <Bullet>
                  <strong className="text-[#0052FF]">Fix Campus Friction:</strong> Organize a peer tutoring circle at NOUN, build a simple timetable bot, or lead a financial literacy drive for Cowrywise.
                </Bullet>
                <Bullet>
                  <strong className="text-[#0052FF]">Document the Metrics:</strong> Don't just say you helped; document that you mobilized 140 students, reduced dropout risk, or processed 500 records.
                </Bullet>
                <Bullet>
                  <strong className="text-[#0052FF]">Local Truth Is Globally Unique:</strong> Your authentic experience navigating Nigerian constraints is your distinct global competitive advantage!
                </Bullet>
              </ul>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono text-[#0052FF] font-bold uppercase">
                "Prove it in Lagos, Yaba, or Abuja first. Geneva will listen."
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 8: VOLUNTEERING INTENTIONALLY - BUILDING THE IMPACT CV
     ========================================================================== */
  {
    id: "volunteering-intentionally",
    title: "Volunteering Intentionally: Building the Impact CV",
    notes:
      "STRATEGY FOR CAMPUS AMBASSADORS: Address the Cowrywise Ambassadors directly. Being a campus ambassador or community volunteer is NOT a passive line on a CV. It is your live sandbox. Teach them the 'Impact CV Formula': Action + Context + Quantifiable Metric. Instead of writing 'I was a Cowrywise campus ambassador', write: 'Spearheaded financial inclusion drives across 3 faculties, onboarding 450+ students to disciplined savings and hosting 4 virtual masterclasses.'",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="07: The Impact CV">
        <div>
          <h2 className="slide-title">
            Volunteering Intentionally:
            <span className="text-[#0052FF] ml-3">Building the Impact CV</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Volunteering is not free labor; it is strategic apprenticeship and high-trust equity building.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-5 p-8 flex flex-col justify-between" tone="paper">
            <div>
              <Kicker tone="paper">The Passive Approach (Weak)</Kicker>
              <div className="mt-6 p-4 bg-white border-2 border-red-500 rounded">
                <p className="font-mono text-sm text-red-600 font-bold uppercase">Resume Line Item:</p>
                <p className="italic text-base text-[#0A1128] mt-2">
                  "Member / Ambassador, Cowrywise NOUN Chapter (2025 – 2026). Attended meetings, helped with events, and posted on WhatsApp groups."
                </p>
              </div>
              <p className="text-sm text-[#0A1128]/70 mt-4 leading-relaxed">
                Why this fails: Tells the reviewer nothing about your initiative, problem-solving ability, or tangible contribution.
              </p>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-red-600 uppercase">Outcome: Blends into the pile</span>
            </div>
          </Card>

          <Card className="col-span-7 p-8 flex flex-col justify-between" tone="soft">
            <div>
              <div className="flex items-center justify-between">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-[#0052FF] text-white px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wider">
                  The Intentional Impact CV (Undeniable)
                </span>
                <Award className="h-7 w-7 text-[#0052FF]" />
              </div>

              <div className="mt-6 p-5 bg-white border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                <p className="font-mono text-sm text-[#0052FF] font-bold uppercase">The Optimized Impact Bullet:</p>
                <p className="text-base text-[#0A1128] font-semibold mt-2 leading-relaxed">
                  "Spearheaded a 4-day virtual career bootcamp for 350+ NOUN students across 12 study centers, curating 6 industry speakers, coordinating logistics on Google Meet, and boosting financial literacy registrations by 85%."
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="p-3 bg-white border-2 border-[#0A1128] text-center">
                  <p className="font-mono font-bold text-xs uppercase text-[#0052FF]">Leadership</p>
                  <p className="text-sm font-bold text-[#0A1128] mt-1">Initiative &amp; Ownership</p>
                </div>
                <div className="p-3 bg-white border-2 border-[#0A1128] text-center">
                  <p className="font-mono font-bold text-xs uppercase text-[#0052FF]">Metrics</p>
                  <p className="text-sm font-bold text-[#0A1128] mt-1">Quantifiable Scale</p>
                </div>
                <div className="p-3 bg-white border-2 border-[#0A1128] text-center">
                  <p className="font-mono font-bold text-xs uppercase text-[#0052FF]">Artifact</p>
                  <p className="text-sm font-bold text-[#0A1128] mt-1">Documented Output</p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">
                "Treat volunteer assignments as high-stakes professional auditions."
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 9: NETWORKING - CREATING GRAVITATIONAL PULL
     ========================================================================== */
  {
    id: "networking-gravitational-pull",
    title: "Networking: Shifting from Begging to Creating Gravitational Pull",
    notes:
      "TACTICAL NETWORKING: Most student networking is awkward: cold DMs saying 'Hello sir, kindly mentor me' or 'Any job for me?'. Explain the Golden Rule of Networking: People do not respond to need; they respond to VALUE and CLARITY. Teach them how to reach out effectively: 1. Research the person deeply. 2. Highlight a specific project they built. 3. Offer a small improvement, a typo fix, or a smart summary. 4. Ask a concise question that takes 60 seconds to answer.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="08: High-Leverage Networking">
        <div>
          <h2 className="slide-title">
            Networking:
            <span className="text-[#0052FF] ml-3">Gravitational Pull vs. Begging</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Opportunities do not flow to people who need them; they flow to people who demonstrate value.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-5 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-red-100 border-2 border-red-500 text-red-600 font-bold text-xs">
                  AVOID
                </span>
                <h4 className="font-display text-2xl font-bold text-[#0A1128]">
                  The "Entitlement" Cold DM
                </h4>
              </div>
              <div className="mt-5 p-4 bg-[#FAF7EE] border-2 border-[#0A1128]/30 rounded font-mono text-sm leading-relaxed text-[#0A1128]/80">
                "Hello Sir/Ma, I just graduated and I am looking for a global remote job or mentor. Please connect me or help my career. God bless you."
              </div>
              <ul className="mt-5 space-y-2 text-sm text-[#0A1128]/80">
                <li>• Puts 100% of the cognitive burden on the recipient.</li>
                <li>• Gives zero reason why anyone should spend time on you.</li>
                <li>• Almost guaranteed to be left on "Read".</li>
              </ul>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-red-600 uppercase">Result: 0% Response Rate</span>
            </div>
          </Card>

          <Card className="col-span-7 p-8 flex flex-col justify-between" tone="soft">
            <div>
              <div className="flex items-center justify-between">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-[#0052FF] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
                  HIGH-LEVERAGE FORMULA
                </span>
                <Users className="h-7 w-7 text-[#0052FF]" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#0052FF] mt-4">
                The Value-First Protocol
              </h4>

              <div className="mt-4 space-y-3">
                <div className="p-3.5 bg-white border-2 border-[#0A1128] rounded">
                  <p className="font-bold text-sm text-[#0A1128]">1. Deep Contextual Homework:</p>
                  <p className="text-xs text-[#0A1128]/80 mt-0.5">
                    Read their recent blog, listen to their podcast, or inspect their GitHub project before you type a single word.
                  </p>
                </div>

                <div className="p-3.5 bg-white border-2 border-[#0A1128] rounded">
                  <p className="font-bold text-sm text-[#0A1128]">2. Proactive Contribution:</p>
                  <p className="text-xs text-[#0A1128]/80 mt-0.5">
                    "I noticed a small bug in your documentation and submitted a PR," or "I loved your essay on fintech and visualized it in this infographic."
                  </p>
                </div>

                <div className="p-3.5 bg-white border-2 border-[#0A1128] rounded">
                  <p className="font-bold text-sm text-[#0A1128]">3. Low-Friction Asymmetry:</p>
                  <p className="text-xs text-[#0A1128]/80 mt-0.5">
                    Never ask "can we hop on a 30-min call?". Ask one ultra-specific, high-clarity question they can answer in 2 sentences.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">
                "Be so useful that ignoring you feels like a loss to them."
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 10: SELF-ASSESSMENT & THE THEORY OF COMPARISON
     ========================================================================== */
  {
    id: "theory-of-comparison",
    title: "Self-Assessment and Evaluation: The Theory of Comparison",
    notes:
      "MENTAL HEALTH & RESILIENCE: One of the biggest killers of young talent in Nigeria is social media despair. You log onto LinkedIn or X and see a 20-year-old claiming they got a $100k remote role and just bought a car. You feel paralyzed. Address 'The Theory of Comparison': You are comparing your unedited backstage footage with someone else's curated highlight reel. Benchmark yourself ONLY against your 6-month-ago self: Are you writing cleaner code? Are you articulating your ideas better? Are you more disciplined?",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="09: Psychology & Benchmarking">
        <div>
          <h2 className="slide-title">
            Self-Assessment &amp; Evaluation:
            <span className="text-[#0052FF] ml-3">The Theory of Comparison</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Comparison is either the fuel of bitter paralysis or the compass of self-calibration.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-6 p-8 flex flex-col justify-between" tone="paper">
            <div>
              <span className="brut-flat border-[3px] border-[#0A1128] bg-red-100 text-red-700 px-3 py-1 font-mono text-xs font-bold uppercase">
                Toxic Comparison (Social Media FOMO)
              </span>
              <h3 className="font-display text-3xl font-extrabold text-[#0A1128] mt-4">
                Comparing Your Backstage to Their Stage
              </h3>
              <ul className="mt-5 space-y-4">
                <Bullet tone="dark">
                  <strong>The Highlight Reel Illusion:</strong> You see someone’s "I am thrilled to announce..." post, but you didn't see their 240 silent rejection emails.
                </Bullet>
                <Bullet tone="dark">
                  <strong>Different Starting Lines:</strong> Some peers have generational safety nets, foreign laptops, or family connections. Comparing raw timelines is mathematically irrational.
                </Bullet>
                <Bullet tone="dark">
                  <strong>The Paralysis Cycle:</strong> Comparison breeds cynicism, imposter syndrome, and eventually quitting before compounding kicks in.
                </Bullet>
              </ul>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0A1128]/70 uppercase">
                Trap: Running someone else's race with your own stamina.
              </span>
            </div>
          </Card>

          <Card className="col-span-6 p-8 flex flex-col justify-between" tone="blue">
            <div>
              <span className="brut-flat border-[3px] border-white bg-white text-[#0052FF] px-3 py-1 font-mono text-xs font-bold uppercase shadow-[3px_3px_0_0_#000]">
                Calibrated Self-Assessment (The Long Game)
              </span>
              <h3 className="font-display text-3xl font-extrabold text-white mt-4">
                The Internal Retrospective
              </h3>

              <div className="mt-6 space-y-4">
                <div className="p-4 bg-white text-[#0A1128] border-2 border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                  <h4 className="font-display text-lg font-bold text-[#0052FF]">
                    Measure Velocity, Not Altitude
                  </h4>
                  <p className="text-sm mt-1">
                    Are you learning faster today than you were 6 months ago? Can you ship something now that used to intimidate you last year?
                  </p>
                </div>

                <div className="p-4 bg-white text-[#0A1128] border-2 border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                  <h4 className="font-display text-lg font-bold text-[#0052FF]">
                    Audit Your Inputs Daily
                  </h4>
                  <p className="text-sm mt-1">
                    You cannot control whether an employer hires you today. You CAN control whether you committed code, read 20 pages, or wrote an application.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/30 pt-3">
              <span className="text-xs font-mono font-bold uppercase text-white">
                "Benchmark yourself against your yesterday, never against someone else’s highlight reel."
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 11: CONSISTENCY & STAYING INVOLVED
     ========================================================================== */
  {
    id: "consistency-communities-mentors",
    title: "Consistency & Staying Involved: Communities and Mentorship",
    notes:
      "COMMUNITY POWER: Emphasize that nobody makes it alone in global tech or global fellowships. Lone wolves die of isolation. Why communities like Cowrywise Ambassadors, GDG, SheCodeAfrica, OSCA matter: They compress time. You learn about opportunities weeks before they appear on LinkedIn. How to find mentors: Do not ask 'will you mentor me?'. Ask targeted questions, implement their feedback, and report back. The best mentees are execution engines.",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="10: Staying in the Arena">
        <div>
          <h2 className="slide-title">
            Staying in the Arena:
            <span className="text-[#0052FF] ml-3">Communities &amp; Mentorship</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Talent is everywhere, but opportunity clusters in active, high-trust communities.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          <Card className="col-span-6 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-[#EBF2FF] border-2 border-[#0A1128]">
                  <Users className="h-7 w-7 text-[#0052FF]" />
                </span>
                <h3 className="font-display text-3xl font-extrabold text-[#0A1128]">
                  Why You Cannot Be a Lone Wolf
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                <Bullet>
                  <strong className="text-[#0052FF]">Information Asymmetry:</strong> The best opportunities (grants, seed funding, unpublished roles) circulate inside private communities long before public job boards.
                </Bullet>
                <Bullet>
                  <strong className="text-[#0052FF]">Accountability &amp; Momentum:</strong> When your peers in Cowrywise or developer circles are shipping, it forces your own standards to elevate.
                </Bullet>
                <Bullet>
                  <strong className="text-[#0052FF]">Peer Referrals:</strong> Your fellow students and ambassadors today will be tomorrow’s engineering managers, founders, and directors globally.
                </Bullet>
              </ul>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">
                "Show me your community, and I will show you your 3-year trajectory."
              </span>
            </div>
          </Card>

          <Card className="col-span-6 p-8 flex flex-col justify-between" tone="soft">
            <div>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-[#0052FF] border-2 border-[#0A1128] text-white">
                  <Flame className="h-7 w-7 text-white" />
                </span>
                <h3 className="font-display text-3xl font-extrabold text-[#0052FF]">
                  The Reverse Mentorship Formula
                </h3>
              </div>

              <div className="mt-5 space-y-3">
                <div className="p-3.5 bg-white border-2 border-[#0A1128] rounded">
                  <p className="font-bold text-sm text-[#0A1128]">Step 1: Never Ask for "Mentorship"</p>
                  <p className="text-xs text-[#0A1128]/80 mt-1">
                    Busy leaders decline generic "mentorship" requests. Instead, ask for 5 minutes of tactical guidance on one specific hurdle.
                  </p>
                </div>

                <div className="p-3.5 bg-white border-2 border-[#0A1128] rounded">
                  <p className="font-bold text-sm text-[#0A1128]">Step 2: Execute Immediately</p>
                  <p className="text-xs text-[#0A1128]/80 mt-1">
                    Take the advice. Build the thing. Send the application. Read the recommended book. Don't procrastinate.
                  </p>
                </div>

                <div className="p-3.5 bg-white border-2 border-[#0A1128] rounded">
                  <p className="font-bold text-sm text-[#0A1128]">Step 3: Close the Loop with Proof</p>
                  <p className="text-xs text-[#0A1128]/80 mt-1">
                    Message them back: "I implemented your advice, and here is the result." Congratulations—you now have a lifelong champion and mentor.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0A1128] uppercase">
                "Mentors don't adopt people who need advice; they invest in execution machines."
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 12: THE ACTION PLAN - CURATED ECOSYSTEM
     ========================================================================== */
  {
    id: "action-plan-ecosystem",
    title: "The Action Plan: People to Follow and Platforms to Join",
    notes:
      "PRACTICAL TOOLKIT: Give them concrete names and websites they can bookmark tonight. Divide into: 1. Voices to follow (Builders, founders, impact leaders). 2. Academic & Opportunity platforms (Opportunity Desk, Opportunities for Africans, Chevening, Erasmus Mundus). 3. Social impact & tech hubs (Cowrywise campus community, ALX, OSCA, GDG). Tell them: 'Your Twitter/X feed and LinkedIn feed are your cognitive diet. Unfollow gossip; follow builders.'",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="11: Concrete Action Plan">
        <div>
          <h2 className="slide-title">
            The Action Plan:
            <span className="text-[#0052FF] ml-3">Curated Ecosystem &amp; Platforms</span>
          </h2>
          <p className="slide-subtitle mt-2 text-[#0A1128]/80 font-normal">
            Curate your digital diet. Your environment dictates your aspirations.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 items-stretch flex-1 my-4">
          {/* People to Learn From */}
          <Card className="col-span-6 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-[#0052FF] text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider">
                  Voices &amp; Builders to Study
                </span>
                <Users className="h-6 w-6 text-[#0052FF]" />
              </div>

              <div className="mt-5 space-y-3">
                <div className="p-3 bg-[#FAF7EE] border-2 border-[#0A1128]/20 rounded">
                  <p className="font-bold text-sm text-[#0A1128]">
                    Fintech &amp; Product Builders:
                  </p>
                  <p className="text-xs text-[#0A1128]/80 mt-0.5">
                    <strong>Razaq Ahmed &amp; Edward Popoola</strong> (Cowrywise founders — discipline, financial engineering, long game), <strong>Shola Akinlade &amp; Ezra Olubi</strong> (Paystack).
                  </p>
                </div>

                <div className="p-3 bg-[#FAF7EE] border-2 border-[#0A1128]/20 rounded">
                  <p className="font-bold text-sm text-[#0A1128]">
                    Global Craft &amp; Leverage Thinkers:
                  </p>
                  <p className="text-xs text-[#0A1128]/80 mt-0.5">
                    <strong>Naval Ravikant</strong> (Leverage, judgment, specific knowledge), <strong>Paul Graham</strong> (Maker schedule, doing things that don’t scale).
                  </p>
                </div>

                <div className="p-3 bg-[#FAF7EE] border-2 border-[#0A1128]/20 rounded">
                  <p className="font-bold text-sm text-[#0A1128]">
                    Scholarship &amp; Academic Champions:
                  </p>
                  <p className="text-xs text-[#0A1128]/80 mt-0.5">
                    <strong>Dr. Dipo Awojide</strong>, <strong>Scholarship Region</strong>, and past alumni of Erasmus Mundus, Mastercard Foundation &amp; Chevening.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0052FF] uppercase">
                Diet Rule: If their feed doesn't inspire you to build, unfollow.
              </span>
            </div>
          </Card>

          {/* Platforms to Join */}
          <Card className="col-span-6 p-8 flex flex-col justify-between" tone="soft">
            <div>
              <div className="flex items-center justify-between">
                <span className="brut-flat border-[3px] border-[#0A1128] bg-white text-[#0052FF] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider border-[#0A1128]">
                  Ecosystems &amp; Portals
                </span>
                <Compass className="h-6 w-6 text-[#0052FF]" />
              </div>

              <div className="mt-5 space-y-3">
                <div className="p-3 bg-white border-2 border-[#0A1128]/20 rounded">
                  <p className="font-bold text-sm text-[#0052FF]">Global Opportunity Aggregators:</p>
                  <p className="text-xs text-[#0A1128] mt-0.5">
                    • <strong>Opportunity Desk</strong> (opportunitydesk.org)
                    <br />• <strong>Opportunities For Africans</strong> (opportunitiesforafricans.com)
                    <br />• <strong>Youth Hub Africa</strong>
                  </p>
                </div>

                <div className="p-3 bg-white border-2 border-[#0A1128]/20 rounded">
                  <p className="font-bold text-sm text-[#0052FF]">High-Impact Fellowships:</p>
                  <p className="text-xs text-[#0A1128] mt-0.5">
                    • <strong>Millennium Campus Network (MCN / UN Academic Impact)</strong>
                    <br />• <strong>YALI Regional Leadership Centers (RLC)</strong>
                    <br />• <strong>Ashoka Young Changemakers &amp; Global Changemakers</strong>
                  </p>
                </div>

                <div className="p-3 bg-white border-2 border-[#0A1128]/20 rounded">
                  <p className="font-bold text-sm text-[#0052FF]">Developer &amp; Builder Networks:</p>
                  <p className="text-xs text-[#0A1128] mt-0.5">
                    • <strong>Cowrywise Campus Ambassadors</strong> (Your primary launchpad!)
                    <br />• <strong>Open Source Community Africa (OSCA)</strong> &amp; <strong>GDG</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-[#0A1128]/20 pt-3">
              <span className="text-xs font-mono font-bold text-[#0A1128] uppercase">
                Bookmark these portals. Check them every Monday morning.
              </span>
            </div>
          </Card>
        </div>
      </SlideLayout>
    ),
  },

  /* ==========================================================================
     SLIDE 13: CLOSING & Q/A - PLAY THE LONG GAME
     ========================================================================== */
  {
    id: "closing-play-the-long-game",
    title: "Closing & Q/A: Play The Long Game",
    notes:
      "GRAND FINALE & CALL TO ACTION: Reiterate: Landing your first opportunity is just day 0. The real test is: Can you reinvent yourself year after year? Thank the NOUN Cowrywise Ambassadors for having you. Point to the live QR code and invite everyone to scan it to connect on LinkedIn, Twitter/X, and explore your projects. Open the floor for live questions on Google Meet!",
    render: ({ index, total }) => (
      <SlideLayout index={index} total={total} label="12: The Grand Finale" tone="deep">
        <div className="grid grid-cols-12 gap-10 items-center flex-1 my-auto">
          {/* Left Column: Final Charge */}
          <div className="col-span-7 flex flex-col justify-between h-full py-4">
            <div>
              <span className="inline-block border border-white/30 bg-white/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#FAF7EE]">
                Day 4 Bootcamp Finale · Keynote Takeaway
              </span>
              <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-white mt-6 leading-tight">
                Play The <span className="text-[#0052FF] bg-white px-3 py-0.5">Long Game.</span>
              </h2>
              <p className="font-display text-2xl text-white/90 font-bold mt-6 leading-snug">
                "Landing the opportunity is the beginning, not the finish line. Reinvent yourself continuously."
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#0052FF] shrink-0 mt-1 bg-white rounded-full" />
                  <p className="text-lg text-white/85">
                    Start local: Ground your ambition in solving immediate friction.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#0052FF] shrink-0 mt-1 bg-white rounded-full" />
                  <p className="text-lg text-white/85">
                    Build undeniable proof-of-work that travels faster than any passport.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-[#0052FF] shrink-0 mt-1 bg-white rounded-full" />
                  <p className="text-lg text-white/85">
                    Never stop learning, unlearning, and re-skilling.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center gap-6">
              <span className="text-2xl font-extrabold text-white">Q&amp;A Time</span>
              <span className="text-sm font-mono text-white/70 uppercase">
                Drop your questions in the Google Meet chat!
              </span>
            </div>
          </div>

          {/* Right Column: QR Code & Connect Card */}
          <div className="col-span-5 flex flex-col items-center justify-center">
            <div className="brut bg-white p-8 text-[#0A1128] text-center max-w-[420px] w-full shadow-[12px_12px_0_0_#0052FF]">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#0052FF]">
                Let's Stay Connected
              </p>
              <h3 className="font-display text-2xl font-extrabold mt-1">
                Sheriffdeen Saula
              </h3>
              <p className="text-xs font-semibold text-[#0A1128]/70 uppercase tracking-wider mt-0.5">
                Software Engineer · Builder
              </p>

              {/* QR Code Container */}
              <div className="my-6 flex justify-center">
                <div className="p-3 bg-white border-[3px] border-[#0A1128] shadow-[4px_4px_0_0_#0A1128]">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://linktr.ee/SheriffdeenSaula&color=0a1128"
                    alt="Sheriffdeen Saula Linktree QR Code"
                    className="h-[180px] w-[180px] object-contain"
                  />
                </div>
              </div>

              <a
                href="https://linktr.ee/SheriffdeenSaula"
                target="_blank"
                rel="noreferrer"
                className="deck-ui-btn w-full py-2.5 px-4 text-sm font-bold bg-[#0052FF] text-white hover:bg-[#0039C7]"
              >
                linktr.ee/SheriffdeenSaula <ExternalLink className="h-4 w-4 ml-1" />
              </a>

              <p className="mt-4 font-mono text-xs text-[#0A1128]/70">
                LinkedIn · X/Twitter · GitHub · Projects
              </p>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
];
