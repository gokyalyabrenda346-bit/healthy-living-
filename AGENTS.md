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

- Keep shared site navigation and footer in the root layout and each content page in its own file-based route so every page is directly shareable.
- Keep wellness category and article content in one browser-safe shared module so dropdowns, filters, and reading views stay consistent.
- The contact form creates a downloadable draft without claiming delivery; sending messages requires a separately configured delivery service.
- Pre-optimize shared header UI dependencies and reject outdated Vite dependency requests so React hooks and the renderer cannot use different cached module generations.
