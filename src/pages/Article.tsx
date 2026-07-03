import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import FadeUp from '../components/FadeUp';
import { useSEO } from '../hooks/useSEO';
import { articles } from './Insights';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  useSEO({
    title: article
      ? `${article.title} | Parkbay Consulting`
      : 'Article | Parkbay Consulting',
    description: article?.excerpt ?? '',
    canonical: article
      ? `https://www.parkbayconsulting.ie/insights/${article.slug}`
      : undefined,
  });

  if (!article) return <Navigate to="/insights" replace />;

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] bg-ivory border-b border-[#E5E0D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <FadeUp>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-[13px] text-slate/70 hover:text-gold transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={14} /> Back to Insights
            </Link>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-gold mb-5">
              {article.eyebrow}
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[36px] md:text-[50px] lg:text-[56px] font-bold leading-[1.1] text-navy mb-7 max-w-[820px]">
              {article.title}
            </h1>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex items-center gap-6 text-[13px] text-slate/60">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {article.readTime}
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Cover image */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <FadeUp>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[320px] md:h-[440px] object-cover"
          />
        </FadeUp>
      </div>

      {/* Body */}
      <article className="bg-white py-16 lg:py-24">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="text-[18px] leading-[1.9] text-slate mb-12 font-medium">{article.excerpt}</p>
          </FadeUp>
          {article.body.map((section, i) => (
            <FadeUp key={section.heading} delay={i * 0.05}>
              <h2 className="font-display text-[24px] md:text-[28px] font-semibold text-navy mb-4 mt-12 first:mt-0 leading-[1.3]">
                {section.heading}
              </h2>
              <p className="text-[17px] leading-[1.85] text-slate">{section.content}</p>
            </FadeUp>
          ))}

          {/* Author */}
          <FadeUp>
            <div className="mt-16 pt-10 border-t border-[#E5E0D8]">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-[#E8E4DF] flex-shrink-0" />
                <div>
                  <p className="text-[14px] font-semibold text-navy">Ciara McCluskey</p>
                  <p className="text-[13px] text-slate/70 mt-0.5">
                    Executive Coach & Leadership Development Specialist, Parkbay Consulting
                  </p>
                  <Link
                    to="/about"
                    className="text-[13px] text-gold hover:underline underline-offset-4 mt-2 inline-block"
                  >
                    About Ciara &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-ivory border-t border-[#E5E0D8] py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="font-display text-[32px] md:text-[40px] font-semibold text-navy mb-4">
              Work With Ireland's Leading Executive Coach
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] text-slate mb-10 max-w-[420px] mx-auto">
              Book a confidential consultation to explore how coaching can accelerate your career.
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
