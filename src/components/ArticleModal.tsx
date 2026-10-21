import React from 'react';
import { BlogPost } from '../data/blogPosts';
import { X, Clock, Calendar, User, ArrowLeft, BookmarkCheck } from 'lucide-react';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
  onOpenEnquiry: (serviceName?: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  isOpen,
  onClose,
  post,
  onOpenEnquiry
}) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-6 flex flex-col max-h-[90vh]">
        {/* Header bar */}
        <div className="bg-stone-900 text-stone-200 px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <article className="flex-1 overflow-auto p-6 sm:p-8 space-y-6">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
            <span className="font-semibold text-amber-700 tracking-wide uppercase">
              {post.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>{post.publishDate}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-snug">
            {post.title}
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-2.5 py-3 border-y border-stone-100 text-xs text-stone-600">
            <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-stone-900">{post.author.name}</div>
              <div className="text-[11px] text-stone-500">{post.author.role}</div>
            </div>
          </div>

          {/* Lead Summary */}
          <div className="bg-amber-50/70 border border-amber-200/70 p-4 rounded-lg text-amber-950 font-medium text-sm leading-relaxed">
            {post.summary}
          </div>

          {/* Content paragraphs */}
          <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
              <BookmarkCheck className="w-4 h-4 text-amber-600" />
              <span>Key Architectural & Operational Takeaways</span>
            </div>
            <ul className="space-y-2 text-xs text-stone-600">
              {post.keyTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Callout */}
          <div className="p-5 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-display font-bold text-base text-white">
                Interested in implementing this in your business?
              </div>
              <div className="text-xs text-stone-300 mt-0.5">
                Consult with VijVaar Innovations engineering team in Kakinada.
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(post.title);
              }}
              className="px-5 py-2.5 bg-gold-gradient hover:opacity-95 text-white font-semibold text-xs tracking-wider uppercase rounded-lg shadow-sm whitespace-nowrap cursor-pointer shrink-0"
            >
              Request Consultation
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
