const quotes = [
	"“You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.” —George Lorimer",
	"“Go as far as you can see; when you get there, you’ll be able to see further.” —Thomas Carlyle",
	"“Make each day your masterpiece.” —John Wooden",
	"“The individual who says it is not possible should move out of the way of those doing it.” —Tricia Cunningham",
	"“When someone tells me ‘no,’ it doesn’t mean I can’t do it, it simply means I can’t do it with them.” —Karen E. Quinones Miller",
	"“Build your own dreams or someone else will hire you to build theirs.” —Farrah Gray",
	"“A year from now you may wish you had started today.” —Karen Lamb",
	"“Light tomorrow with today.” —Elizabeth Barrett Browning",
	"“Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.” —Earl Nightingale",
	"“Don’t count the days, make the days count.” —Muhammad Ali",
	"“Believe you can and you’re halfway there.” —Theodore Roosevelt",
	"“Even if you’re on the right track, you’ll get run over if you just sit there.” —Will Rogers",
	"“The more I want to get something done the less I call it work.” —Richard Bach",
	"“Success is the sum of small efforts repeated day in and day out.” —Robert Collier",
	"“If everything seems under control, you’re not going fast enough.” —Mario Andretti",
	"“Never allow a person to tell you no who doesn’t have the power to say yes.” —Eleanor Roosevelt",
	"“Your imagination is your preview of life’s coming attractions.” —Albert Einstein",
	"“Try not. Do, or do not. There is no try.” —Yoda",
	"“The true meaning of life is to plant trees under whose shade you do not expect to sit.” —Nelson Henderson",
	"“I would rather die of passion than of boredom.” —Emile Zola",
	"“Very often a change of self is needed more than a change of scene.” —Arthur Christopher Benson",
	"“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie",
	"“Failure is the condiment that gives success its flavor.” —Truman Capote",
	"“It takes courage to grow up and become who you really are.” —e.e. cummings",
	"“I have not failed. I’ve just found 10,000 ways that won’t work.” —Thomas A. Edison",
	"“What we fear of doing most is usually what we most need to do.” —Ralph Waldo Emerson",
	"“It is better to fail in originality than to succeed in imitation.” —Herman Melville",
	"“Fall 7 times, stand up 8.” —Japanese Proverb",
	"“Success only comes to those who dare to attempt.” —Mallika Tripathi",
	"“People rarely succeed unless they have fun in what they are doing.” —Dale Carnegie",
	"“We must be willing to let go of the life we planned so as to have the life that is waiting for us.” —Joseph Campbell",
	"“Success is liking yourself, liking what you do, and liking how you do it.” —Maya Angelou",
	"Coming together is a beginning, keeping together is progress, working together is success.” —Henry Ford",
	"“Don’t aim for success if you want it, just do what you love and believe in and it will come naturally.” —David Frost",
	"“The question isn’t who is going to let me, it’s who is going to stop me.” —Ayn Rand",
	"“Success is a state of mind. If you want success, start thinking of yourself as a success.” —Joyce Brothers",
];

export const randomQuote = () => {
	const randomNumber = Math.floor(Math.random() * (quotes.length - 1));

	return quotes[randomNumber];
};
