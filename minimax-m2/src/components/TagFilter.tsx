interface TagFilterProps {
  allTags: string[];
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onClearFilters: () => void;
}

export function TagFilter({ allTags, selectedTags, onTagSelect, onClearFilters }: TagFilterProps) {
  if (allTags.length === 0) return null;

  return (
    <div className="tag-filter">
      <div className="tag-filter-label">标签筛选:</div>
      <div className="tag-filter-list">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`tag-filter-btn ${selectedTags.includes(tag) ? 'active' : ''}`}
            onClick={() => onTagSelect(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      {selectedTags.length > 0 && (
        <button className="clear-tags-btn" onClick={onClearFilters}>
          清除筛选
        </button>
      )}
    </div>
  );
}
