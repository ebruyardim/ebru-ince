export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {new Date().getFullYear()} - Ebru Ince
          </p>
        </div>
      </div>
    </footer>
  );
}
