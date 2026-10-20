require 'cgi'

module Jekyll
  module LabAuthorFilters
    def lab_author_names(authors)
      site = @context.registers[:site]
      people = site.collections['members'].docs.map { |member| member.data['name'] }
      people += Array(site.data['past_members']).map { |member| member['name'] }
      keys = people.compact.map { |name| lab_name_key(name.split(',').first.gsub(/\([^)]*\)/, '')) }
      aliases = {
        ['pat', 'dubielecka'] => ['patrycja', 'dubielecka'],
        ['patrycja', 'dubielecka-szczerba'] => ['patrycja', 'dubielecka']
      }
      Array(authors).map do |author|
        key = lab_name_key(author)
        key = aliases.fetch(key, key)
        member = keys.any? do |first, last|
          key[1] == last && (key[0] == first || (key[0].length == 1 && first.start_with?(key[0])))
        end
        safe = CGI.escapeHTML(author.to_s)
        member ? "<strong>#{safe}</strong>" : safe
      end.join(', ')
    end

    def lab_name_key(name)
      parts = name.to_s.unicode_normalize(:nfkd).gsub(/\p{Mn}/, '').downcase.gsub(/[.]/, '').split
      [parts.first.to_s, parts.last.to_s]
    end
  end
end

Liquid::Template.register_filter(Jekyll::LabAuthorFilters)
