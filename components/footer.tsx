import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 text-sm text-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
