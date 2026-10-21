import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../../data/blogPosts';
import { Clock, Calendar, ArrowRight, BookOpen, User } from 'lucide-react';

interface InsightsSectionProps {
  onSelectArticle: (post: BlogPost) => void;
  onOpenEnquiry: (serviceName?: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({
  onSelectArticle,
  onOpenEnquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'SaaS & Cloud',
    'AI & Automation',
    'Software Dev',
    'BPO Operations',
    'Cybersecurity',
    'Digital Transformation'
  ];

  const filteredPosts = BLOG_POSTS.filter(post => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical & Operational Publications</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Insights, Engineering Architecture & BPO Methodologies
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              In-depth articles authored by our solutions leads, covering multi-tenant SaaS architecture, cloud infrastructure optimization, DPDP data protection, and high-accuracy business process outsourcing.
            </p>
          </div>

          <div className="text-xs text-stone-500 font-mono">
            {BLOG_POSTS.length} Published Analyses
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-stone-100 rounded-lg max-w-fit">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              onClick={() => onSelectArticle(post)}
              className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-xs transition-all duration-200 group cursor-pointer space-y-5"
            >
              <div className="space-y-3">
                {/* Clean Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-stone-500">
                  <span className="font-semibold text-amber-700 uppercase tracking-wider text-[11px]">
                    {post.category}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-[11px]">{post.readTime}</span>
                </div>

                {/* Headline */}
                <h3 className="font-display text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              {/* Bottom: Author & Read CTA */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-stone-600">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-[10px]">
                    <User className="w-3 h-3" />
                  </div>
                  <span className="text-[11px] truncate max-w-[120px]">{post.author.name}</span>
                </div>

                <span className="text-amber-700 font-semibold group-hover:text-amber-900 transition-colors inline-flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
