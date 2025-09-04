// Text preprocessing utilities for enhanced display
export const preprocessBotReply = (text: string): string => {
  let processedText = text;

  // Convert **text** to bold
  processedText = processedText.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-[#545454]">$1</strong>');
  
  // Convert *text* to italic
  processedText = processedText.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em class="italic">$1</em>');
  
  // Convert __text__ to underline
  processedText = processedText.replace(/__(.*?)__/g, '<u class="underline">$1</u>');
  
  // Convert ### text to h3
  processedText = processedText.replace(/^### (.*$)/gm, '<h3 class="text-lg font-bold text-[#4DC6D7] mt-3 mb-2">$1</h3>');
  
  // Convert ## text to h2
  processedText = processedText.replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold text-[#545454] mt-4 mb-2">$1</h2>');
  
  // Convert # text to h1
  processedText = processedText.replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold text-[#545454] mt-4 mb-3">$1</h1>');
  
  // Convert numbered lists (1. text)
  processedText = processedText.replace(/^(\d+)\.\s+(.*$)/gm, '<div class="flex items-start mb-2"><span class="text-[#4DC6D7] font-bold mr-2 flex-shrink-0 min-w-[1.2rem]">$1.</span><span class="flex-1">$2</span></div>');
  
  // Convert bullet points (- text or • text)
  processedText = processedText.replace(/^[-•]\s+(.*$)/gm, '<div class="flex items-start mb-2"><span class="text-[#4DC6D7] mr-2 flex-shrink-0">•</span><span class="flex-1">$1</span></div>');
  
  // Convert [text](url) to links
  processedText = processedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#4DC6D7] hover:text-[#545454] underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Convert `code` to inline code
  processedText = processedText.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-[#545454] px-2 py-1 rounded text-sm font-mono">$1</code>');
  
  // Convert ```code``` to code blocks
  processedText = processedText.replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 text-[#545454] p-3 rounded-lg text-sm font-mono mt-2 mb-2 overflow-x-auto border border-gray-200"><code>$1</code></pre>');
  
  // Convert emojis with spacing
  processedText = processedText.replace(/([\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}])/gu, '<span class="inline-block mr-1">$1</span>');
  
  // Convert line breaks to proper spacing
  processedText = processedText.replace(/\n\n/g, '<div class="my-3"></div>');
  processedText = processedText.replace(/\n/g, '<br>');
  
  // Wrap consecutive list items in proper containers
  processedText = processedText.replace(/((<div class="flex items-start mb-2">.*?<\/div>\s*)+)/g, '<div class="space-y-1 my-3">$1</div>');

  return processedText;
};

// Additional utility for sanitizing user input
export const sanitizeUserInput = (text: string): string => {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Utility for truncating long text with ellipsis
export const truncateText = (text: string, maxLength: number = 100): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
};

// Utility for highlighting search terms
export const highlightSearchTerms = (text: string, searchTerm: string): string => {
  if (!searchTerm.trim()) return text;
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 text-[#545454] px-1 rounded">$1</mark>');
};
