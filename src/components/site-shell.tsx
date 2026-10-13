import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { categories } from '@/lib/wellness'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="site-width header-inner">
    <Link to="/" className="brand" aria-label="Healthy Living home">healthy living<span className="brand-dot">.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">
      <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }}>Home</Link>
      <Link to="/about" activeProps={{ className: 'nav-active' }}>About us</Link>
      <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="nav-dropdown">Categories <ChevronDown /></Button></DropdownMenuTrigger><DropdownMenuContent align="start" className="w-56">{categories.map(c => <DropdownMenuItem key={c.id} asChild><Link to="/categories" search={{ category: c.id }}>{c.name}</Link></DropdownMenuItem>)}</DropdownMenuContent></DropdownMenu>
      <Link to="/gallery" activeProps={{ className: 'nav-active' }}>Gallery</Link><Link to="/faq" activeProps={{ className: 'nav-active' }}>FAQ</Link><Link to="/contact" activeProps={{ className: 'nav-active' }}>Contact</Link>
    </nav>
    <Button asChild className="header-cta"><Link to="/categories" search={{ category: 'all' }}>Live a little better <ArrowUpRight /></Link></Button>
    <Button variant="ghost" size="icon" className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </div>{open && <nav className="mobile-nav" aria-label="Mobile navigation"><Link to="/" onClick={() => setOpen(false)}>Home</Link><Link to="/about" onClick={() => setOpen(false)}>About us</Link><span className="eyebrow">Categories</span>{categories.map(c => <Link key={c.id} to="/categories" search={{ category: c.id }} onClick={() => setOpen(false)}>{c.name}</Link>)}<Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link><Link to="/faq" onClick={() => setOpen(false)}>FAQ</Link><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></nav>}</header>
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="site-width"><div className="footer-top"><div><Link to="/" className="brand">healthy living.</Link><p>A little inspiration. A healthier everyday.</p></div><div className="footer-links"><Link to="/about">About us</Link><Link to="/categories" search={{ category: 'all' }}>Categories</Link><Link to="/gallery">Gallery</Link><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Healthy Living. Made for a life well lived.</span><span>Small steps, with <Heart size={13} /></span></div><p className="medical-note">For general inspiration only. Not a substitute for personalised medical advice.</p></div></footer>
}
