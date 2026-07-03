import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import { useSEO } from '../hooks/useSEO';

const articles = [
  {
    slug: 'navigating-boardroom-dynamics-ireland',
    eyebrow: 'Leadership',
    title: 'Navigating Boardroom Dynamics in Modern Ireland',
    excerpt:
      'The Irish boardroom has changed dramatically over the past decade. As governance expectations rise, diversity mandates evolve, and the pace of strategic decision-making accelerates, today\'s C-suite executives face a more complex boardroom landscape than any generation before them. Here\'s how high-performing Irish leaders are adapting.',
    date: 'June 2025',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    body: [
      {
        heading: 'The Changing Irish Boardroom',
        content:
          'The traditional model of Irish board governance — characterised by informal networks, relationship-driven decision-making, and a relatively homogeneous composition — is giving way to something more structured, accountable, and demanding. Corporate governance codes, shareholder activism, and a new generation of non-executive directors are reshaping what it means to operate effectively at board level in Ireland.',
      },
      {
        heading: 'The Challenge of Strategic Alignment',
        content:
          'One of the most common challenges executives face when transitioning to a board or senior C-suite role is learning to navigate conflicting stakeholder agendas while maintaining strategic clarity. In Ireland\'s mid-market and semi-state sectors particularly, boards often contain a mix of commercially focused non-executives and stakeholder representatives — each with different definitions of success.',
      },
      {
        heading: 'What the Best Irish Board Leaders Do Differently',
        content:
          'The executives who thrive in Ireland\'s modern boardrooms share a set of distinguishing behaviours: they invest in building trust before they need influence, they develop a clear personal voice on strategic matters, and they understand the difference between operational thinking and governance thinking. Executive coaching is increasingly central to how senior Irish leaders develop these capabilities — providing a confidential space to stress-test boardroom positions and refine executive communication.',
      },
      {
        heading: 'The Role of Executive Coaching',
        content:
          'Leadership development and executive coaching programmes — such as those delivered by Parkbay Consulting across Dublin, Cork, Galway, and Belfast — are specifically designed to help senior leaders operate more effectively at board level. By combining 360-degree feedback, psychometric assessment, and structured coaching, these programmes accelerate the development of the self-awareness and strategic communication skills that boardroom effectiveness demands.',
      },
    ],
  },
  {
    slug: 'how-high-achieving-executives-avoid-burnout',
    eyebrow: 'Wellbeing & Performance',
    title: 'How High-Achieving Irish Executives Avoid Burnout',
    excerpt:
      'Burnout among senior leaders is not a sign of weakness — it is a predictable outcome of sustained high performance without the right recovery architecture in place. Ireland\'s most effective C-suite executives have learned to treat their personal sustainability as a strategic asset. Here is what they do differently.',
    date: 'May 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3760093/pexels-photo-3760093.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
    body: [
      {
        heading: 'The Burnout Paradox at Senior Level',
        content:
          'The executives most at risk of burnout are often those who appear — both to themselves and to others — to be performing at their best. The high-drive, high-ambition profile that characterises most C-suite leaders in Ireland is precisely the profile most vulnerable to the slow accumulation of unsustainable pressure. The warning signs are easy to miss: a slight narrowing of perspective, reduced creativity, increasing irritability, and a gradual shift from proactive to reactive leadership.',
      },
      {
        heading: 'What Sustainable High Performance Actually Looks Like',
        content:
          'The research on high performance across elite domains — from professional sport to surgery to investment management — points to the same conclusion: sustained output requires structured recovery. For Irish executives, this means being intentional about cognitive recovery (not just physical rest), setting boundaries around decision fatigue, and building genuine renewal activities into the weekly rhythm — not as a reward for performance, but as a precondition of it.',
      },
      {
        heading: 'The Strategic Use of Executive Coaching',
        content:
          'One of the most underutilised tools for burnout prevention at senior level is executive coaching. The coaching relationship provides a protected space for genuine reflection — removed from the performance demands of the day job. Many of Parkbay Consulting\'s clients across Dublin, Galway, Cork, and Belfast describe their coaching sessions as the only time in their professional week where they can think clearly about the long game rather than the immediate pressure.',
      },
      {
        heading: 'Building Your Recovery Architecture',
        content:
          'The executives who avoid burnout while maintaining exceptional performance share a common discipline: they treat their recovery with the same rigour they apply to strategy. This means auditing their energy expenditure across cognitive, emotional, and physical dimensions, identifying their personal depletion triggers, and investing in the coaching and peer relationships that give them honest external perspective. For leaders committed to exceeding their potential across Ireland and internationally, that investment is not optional — it is essential.',
      },
    ],
  },
];

export default function Insights() {
  useSEO({
    title: 'Executive Leadership Insights | Blog | Parkbay Consulting Ireland',
    description:
      'Insights on executive coaching, leadership development, and high-performance career management for senior leaders across Ireland.',
    canonical: 'https://www.parkbayconsulting.ie/insights',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-ivory border-b border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-5">
              Insights
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[42px] md:text-[56px] lg:text-[60px] font-bold leading-[1.1] text-navy mb-6 max-w-[700px]">
              Executive Leadership Insights for Irish Leaders
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[17px] leading-[1.85] text-slate max-w-[560px]">
              Perspectives on executive coaching, boardroom effectiveness, leadership development,
              and high-performance career management — written for Ireland's senior leaders.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {articles.map((article, i) => (
              <FadeUp key={article.slug} delay={i * 0.1}>
                <Link
                  to={`/insights/${article.slug}`}
                  className="group block border border-[#E5E0D8] hover:border-gold/40 transition-colors duration-300 overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-[240px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-4">
                      {article.eyebrow}
                    </p>
                    <h2 className="font-display text-[22px] md:text-[24px] font-semibold text-navy mb-4 leading-[1.3] group-hover:text-gold transition-colors duration-200">
                      {article.title}
                    </h2>
                    <p className="text-[15px] leading-[1.8] text-slate mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5 text-[12px] text-slate/60">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1.5 text-[13px] font-medium text-gold group-hover:gap-2.5 transition-all duration-200">
                        Read article <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-white mb-4">
              Ready to Advance Your Executive Career?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] text-white/60 mb-10 max-w-[420px] mx-auto">
              Book a confidential consultation with Ireland's leading executive coach.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <Link to="/book" className="btn-gold text-[13px]">
              <span>Book a Strategic Consultation</span>
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

export { articles };
