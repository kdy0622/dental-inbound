import React, { useState, useMemo } from 'react';
import { Search, Volume2, Bookmark, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { GlossaryTerm } from '../types';

interface GlossaryProps {
  terms: GlossaryTerm[];
}

const Glossary: React.FC<GlossaryProps> = ({ terms }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set(terms.map(t => t.category));
    return ['all', ...Array.from(cats)];
  }, [terms]);

  const filteredTerms = useMemo(() => {
    return terms.filter(term => {
      const matchesSearch = 
        term.term_kor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.term_eng.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (term.pronunciation && term.pronunciation.includes(searchTerm));

      const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [terms, searchTerm, selectedCategory]);

  const handleImageSearch = (term: GlossaryTerm) => {
    // Construct a Google Image Search query
    const query = encodeURIComponent(`${term.term_kor} ${term.term_eng} 치과`);
    window.open(`https://www.google.com/search?tbm=isch&q=${query}`, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">치과 용어 사전</h2>
          <p className="text-slate-500 mt-1">임상 용어와 차트 용어를 쉽게 찾아보세요.</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text"
            placeholder="용어 검색 (한글, 영어, 발음 등)"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat 
                  ? 'bg-teal-600 text-white shadow-sm' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? '전체 보기' : cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTerms.map((term, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 hover:border-teal-300 transition-all hover:shadow-md overflow-hidden group flex flex-col h-full">
            <div className="p-6 flex-1">
              <div className="flex items-start justify-between mb-2">
                <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-700 mb-2">
                  {term.category}
                </span>
                <Bookmark className="w-4 h-4 text-slate-300 group-hover:text-teal-500 cursor-pointer transition-colors" />
              </div>

              <div className="mb-3">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {term.term_eng}
                  </h3>
                  {term.pronunciation && (
                    <div className="flex items-center gap-1 text-teal-600 text-sm font-medium bg-teal-50 px-2 py-0.5 rounded">
                      <Volume2 className="w-3 h-3" />
                      <span>{term.pronunciation}</span>
                    </div>
                  )}
                </div>
                <p className="text-slate-600 font-medium mt-1">{term.term_kor}</p>
              </div>
              
              <div className="border-t border-slate-100 my-3 pt-3">
                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                  {term.description}
                </p>
              </div>

              {term.related_terms && term.related_terms.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4">
                  <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">관련 용어</p>
                  <div className="flex flex-wrap gap-2">
                    {term.related_terms.map((rel, rIdx) => (
                      <span key={rIdx} className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                        {rel}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
              <button 
                onClick={() => handleImageSearch(term)}
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 py-2.5 rounded-lg hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200 transition-all shadow-sm group/btn"
              >
                <ImageIcon className="w-4 h-4 text-slate-400 group-hover/btn:text-teal-600" />
                사진 자료 보기 (검색)
                <ExternalLink className="w-3 h-3 opacity-50 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredTerms.length === 0 && (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg">검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default Glossary;