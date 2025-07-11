exports.handler = async function (event) {
  // Dummy stories array
  const stories = [
  {
    id: 's17',
    author: 'Ruturaj Gaikwad',
    date: '2025-05-01',
    title: 'Opening Elegance',
    excerpt: 'Grace under pressure...',
    content: 'Ruturaj Gaikwad opened the innings on a green top where the ball was swinging heavily. The team had lost two early wickets, and the opposition bowlers were breathing fire. But Gaikwad remained calm, leaving balls outside off and punishing anything short or overpitched. His straight drives were as elegant as ever. He paced his innings beautifully, reaching 50 in 38 balls, and eventually went on to score 96 before getting caught trying to accelerate. His innings laid the perfect foundation and gave the middle order a platform to explode.',
    votes: 22,
    tag: 'batting'
  },
  {
    id: 's18',
    author: 'Umran Malik',
    date: '2025-05-02',
    title: 'Pace of Fire',
    excerpt: '150+ km/h missiles...',
    content: 'Umran Malik bowled with raw pace on a flat deck where other bowlers struggled. He clocked over 150 km/h consistently and used short balls to good effect. One delivery clocked at 153 km/h shattered the stumps of an in-form batsman. His control improved drastically, and his figures of 4/25 broke the back of the opposition. The crowd gasped every time he ran in, and his sheer speed made even well-set batters uncomfortable.',
    votes: 30,
    tag: 'bowling'
  },
  {
    id: 's19',
    author: 'Manish Pandey',
    date: '2025-05-03',
    title: 'Anchor Role Mastery',
    excerpt: 'Stood tall amidst collapse...',
    content: 'In a high-pressure match where wickets kept tumbling, Manish Pandey held the innings together like a rock. He rotated the strike smartly, took calculated risks, and targeted the weaker bowlers. While other batters played rash shots, Pandey focused on stitching partnerships. His knock of 67 off 55 balls wasn’t flashy but was priceless. Without him, the team would’ve folded under 120. Instead, they posted 170 — which turned out to be a winning total.',
    votes: 16,
    tag: 'batting'
  },
  {
    id: 's20',
    author: 'Prasidh Krishna',
    date: '2025-05-04',
    title: 'Opening Spell Carnage',
    excerpt: 'Broke the top order...',
    content: 'Prasidh Krishna started the innings with fire. His first delivery swung away and beat the bat. The very next ball came in and trapped the opener LBW. He followed it up with a bouncer that the No.3 gloved to the keeper. Within two overs, he had 3 wickets, and the opposition was in tatters. His control, seam position, and aggression reminded fans of peak Zaheer Khan. His final spell at the death helped restrict the target further, earning him a well-deserved Player of the Match award.',
    votes: 25,
    tag: 'bowling'
  },
  {
    id: 's21',
    author: 'Ravindra Jadeja',
    date: '2025-05-05',
    title: 'Fielding Frenzy',
    excerpt: 'Catches, stops, and a run-out...',
    content: 'Jadeja once again proved why he’s India’s best fielder. He took a blinder at backward point diving full length to his right. Later in the innings, he saved at least 15 runs with lightning-fast stops and one rocket throw from deep mid-wicket that ran out the non-striker. His fitness and anticipation turned what could’ve been boundaries into dot balls. His fielding lifted the entire team and frustrated the batting side, shifting momentum in India’s favor.',
    votes: 27,
    tag: 'fielding'
  },
  {
    id: 's22',
    author: 'Mayank Markande',
    date: '2025-05-06',
    title: 'Spin It Like Magic',
    excerpt: 'Turned the match alone...',
    content: 'Mayank was introduced in the 8th over when the opposition was cruising at 70/1. His very first over saw a deceptive googly that bowled the set batter. Then he bowled a flighted delivery that induced a top edge caught at long-off. Suddenly, from 70/1 the team was 80/4. His clever variations, use of the crease, and subtle changes in pace bamboozled the batters. He finished with 4 wickets and changed the match entirely.',
    votes: 20,
    tag: 'bowling'
  },
  {
    id: 's23',
    author: 'Ravi Bishnoi',
    date: '2025-05-07',
    title: 'Wall in the Field',
    excerpt: 'Saved 3 boundaries...',
    content: 'Ravi Bishnoi, primarily known for his bowling, made headlines for his athletic fielding. Fielding at deep square leg, he made three diving saves near the boundary rope that saved at least 9 crucial runs. He also ran out a batter with a direct hit from the boundary — an effort that left commentators stunned. His energy, hustle, and commitment inspired his teammates, setting high fielding standards for everyone.',
    votes: 15,
    tag: 'fielding'
  },
  {
    id: 's24',
    author: 'MS Dhoni',
    date: '2025-05-08',
    title: 'Captain Iceberg',
    excerpt: 'Strategic genius...',
    content: 'In a knockout game, Dhoni’s calm captaincy proved the difference. He rotated his bowlers smartly and even brought himself up the batting order to guide the chase. His move to keep a spinner for the final over surprised everyone but paid off. He scored the winning runs with a flick past fine leg and walked off with his usual composure. The young players credited him for his guidance, saying, "When he’s around, we never panic."',
    votes: 35,
    tag: 'captaincy'
  },
  {
    id: 's25',
    author: 'Hardik Pandya',
    date: '2025-05-09',
    title: 'Leading From The Front',
    excerpt: 'Inspired the team...',
    content: 'Hardik Pandya, captaining in a must-win match, led by example. He smashed 48 off 24 balls and then took 2 key wickets. But it was his field placement that truly stood out — anticipating a switch hit, he had a fielder stationed deep backward point and it paid off. He constantly motivated the team and backed his players in tough moments. After the win, he credited the bowlers and downplayed his own effort — a true sign of leadership.',
    votes: 29,
    tag: 'captaincy'
  },
  {
    id: 's26',
    author: 'Rohit Sharma',
    date: '2025-05-10',
    title: 'Captain Calm Chase',
    excerpt: 'Timed the chase to perfection...',
    content: 'Rohit Sharma anchored the chase like a seasoned general. Chasing 185, he started cautiously, leaving balls and focusing on strike rotation. When the asking rate climbed, he shifted gears, targeting specific bowlers. He used the crease well, hit boundaries without taking big risks, and paced his innings to perfection. He stayed till the last over and won it with a classic lofted drive. His calmness under pressure ensured no panic in the dressing room.',
    votes: 33,
    tag: 'captaincy'
  }
]



  const { tag, id } = event.queryStringParameters;

  // 🔍 Story Detail API: /api/stories?id=s2
  if (id) {
    const story = stories.find((s) => s.id === id);
    if (!story) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Story not found" })
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(story)
    };
  }

  // 🔍 Filtered Stories API: /api/stories?tag=batting
  if (tag) {
    const filtered = stories.filter((s) => s.tag === tag);
    return {
      statusCode: 200,
      body: JSON.stringify(filtered)
    };
  }

  // 🔁 All Stories API: /api/stories
  return {
    statusCode: 200,
    body: JSON.stringify(stories)
  };
};
