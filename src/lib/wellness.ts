import salad from '@/assets/healthy-salad.jpg'
import movement from '@/assets/movement.jpg'
import mindfulness from '@/assets/mindfulness.jpg'
import sleep from '@/assets/sleep.jpg'
import walk from '@/assets/walk.jpg'
import plate from '@/assets/balanced-plate.jpg'
import tea from '@/assets/tea-pause.jpg'
import windDown from '@/assets/wind-down.jpg'

export const categories = [
  { id: 'nutrition', name: 'Healthy eating', label: 'Nourish your body', description: 'Good food. Better energy. Everyday inspiration for a balanced plate.', image: salad },
  { id: 'fitness', name: 'Fitness & movement', label: 'Find your flow', description: 'Move in ways you love and build strength at your own pace.', image: movement },
  { id: 'mindfulness', name: 'Mindful living', label: 'Make room for calm', description: 'Small moments of mindfulness for a more grounded, present you.', image: mindfulness },
  { id: 'sleep', name: 'Sleep & recovery', label: 'Rest is productive', description: 'Gentle routines that help you unwind, recharge, and feel renewed.', image: sleep },
]
export const articles = [
  { id: 'balanced-plate', category: 'nutrition', title: 'A balanced plate, without the overthinking', time: '5 min read', image: plate, body: 'Start with variety rather than perfection. Fill roughly half your plate with vegetables or fruit, add a protein source such as beans, fish, tofu, or eggs, and include whole grains or another starchy food. A little olive oil, nuts, or avocado adds flavour and unsaturated fats. Let your appetite, preferences, and any advice from your clinician guide portions. Frozen vegetables and canned beans count, too.' },
  { id: 'walking', category: 'fitness', title: 'The everyday magic of a simple walk', time: '4 min read', image: walk, body: 'A walk is a wonderfully approachable way to move more. Start with a comfortable ten minutes, and increase gradually if it feels good. Choose a safe route, wear comfortable shoes, and bring water when needed. Walking with a friend or noticing the natural world can make it more enjoyable. Any movement is a worthwhile start; adapt it to your abilities and talk to a clinician if you have concerns.' },
  { id: 'pause', category: 'mindfulness', title: 'A little pause can change your whole day', time: '3 min read', image: tea, body: 'Find a comfortable seat and let your shoulders soften. Notice your natural breathing without trying to change it. When your attention wanders, gently return to the next breath. Try this for one minute and see how you feel. Mindfulness is not about getting rid of every thought. It is a practice of paying attention with kindness. Stop if the exercise feels uncomfortable, and choose another grounding activity.' },
  { id: 'sleep-routine', category: 'sleep', title: 'Build a wind-down routine that feels like you', time: '4 min read', image: windDown, body: 'Try keeping a fairly consistent waking time and giving yourself a quiet transition before bed. Dim the lights, put work aside, and choose something restful like reading or gentle stretching. A cool, quiet bedroom may help. Most adults need seven to nine hours, although needs vary. Persistent sleep difficulties, loud snoring, or significant daytime tiredness are good reasons to talk with a healthcare professional.' },
]
// Add your TikTok video links here — paste the full share URL of each clip.
export const tiktokVideos: { url: string; title: string }[] = [
  { url: 'https://www.tiktok.com/@tiktok/video/7106594312292453675', title: 'Healthy living inspiration' },
]
export function pageHead(title: string, description: string, css?: string) {
  return { links: css ? [{ rel: 'stylesheet', href: css }] : [], meta: [{ title: `${title} — Healthy Living` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — Healthy Living` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }
}
