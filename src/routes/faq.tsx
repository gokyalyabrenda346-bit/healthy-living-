import pageCss from '@/styles/faq.css?url'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageBanner } from '@/components/wellness-content'
import { pageHead } from '@/lib/wellness'
import faqSoft from '@/assets/faq-soft.jpg'
const questions = [
['Where should I start with healthy living?', 'Choose one small habit that feels achievable: add a vegetable to a meal, take a short walk, or set aside a quiet minute. Build gradually rather than changing everything at once. Your starting point can be different from someone else’s.'],
['Do I need to follow a strict diet?', 'Healthy eating can be flexible and enjoyable. Aim for a variety of vegetables, fruit, whole grains, protein sources, and unsaturated fats. There is room for foods you enjoy. If you have a medical condition or specific dietary needs, ask a qualified dietitian or clinician for personalised guidance.'],
['How much movement do I need?', 'For most adults, public health guidelines recommend at least 150 minutes of moderate activity per week, plus muscle-strengthening activity on two days. Some movement is better than none. Start at a comfortable level and adapt activity to your health, abilities, and circumstances.'],
['Can mindfulness help me feel less stressed?', 'Mindfulness can help some people notice their thoughts and feelings with more awareness. Try a short, gentle practice without expecting a particular result. It is not a replacement for mental health treatment; seek professional support for ongoing distress.'],
['How much sleep should I aim for?', 'Most adults need around seven to nine hours each night. Consistent sleep and wake times, a comfortable room, and a calming evening routine can help. Speak to a healthcare professional if you regularly struggle to sleep or feel very tired during the day.'],
['Is the information on Healthy Living medical advice?', 'No. Our content is general educational inspiration, not individual medical advice, diagnosis, or treatment. Consult a qualified healthcare professional about your personal health needs, especially before making changes related to an existing condition.'],
['Is Healthy Living free to explore?', 'Yes. You can read all the healthy living inspiration on this website without a membership or account.'],
]
export const Route = createFileRoute('/faq')({ head: () => pageHead('Frequently asked questions', 'Find helpful answers about healthy eating, movement, mindfulness, sleep, and the Healthy Living approach.', pageCss), component: FAQ })
function FAQ() { return <><PageBanner eyebrow="A little clarity" title="Good questions. Simple answers." description="Curious about healthy living? Here are a few things you might be wondering." /><div className="photo-page"><img className="photo-bg" src={faqSoft} width={1024} height={1024} loading="lazy" alt="" aria-hidden="true" /><section className="site-width section"><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={19} /></summary><p>{answer}</p></details>)}</div></section><section className="note-band"><h2>Still have something on your mind?</h2><p>We’d love to hear your questions and ideas.</p><Button asChild><Link to="/contact">Get in touch <ArrowRight /></Link></Button></section></div></> }
