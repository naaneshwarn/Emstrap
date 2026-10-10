<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Solution pages share one `PageTemplate` driven by `src/data/pageData.ts`; edit data, not per-page copies, so all six pages stay consistent.
- Site photos live in `public/images/` and are referenced by path; never use external stock image URLs, so images always load after publishing.
