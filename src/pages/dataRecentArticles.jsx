import image from '../assets/image';
const recentArticlesData = [
    {
        id: 1,
        title: 'Découvrir React Hooks',
        date: '2023-01-15',
        image: image.ReactHooksImage,
        smallImage : image.smalreactimage,
        p1: `Bienvenue dans le monde captivant de React Hooks, où la gestion de l'état devient une expérience élégante et puissante. Si vous êtes un développeur React chevronné ou que vous débutez tout juste dans le monde du développement web,
         les React Hooks sont là pour élever votre expérience de programmation à un niveau supérieur.`,
        h1: "Découvrir React Hooks : Une Plongée dans la Magie de la Gestion d'État",
        q1:`React Hooks
        
        Qu'est-ce que React Hooks ?`,
        content : `
        React Hooks est une fonctionnalité introduite dans React 16.8 qui permet aux développeurs de gérer l'état et d'utiliser d'autres fonctionnalités de React dans les composants fonctionnels. Ils résolvent élégamment le problème de la réutilisation du code lié à l'état et aux effets secondaires dans les composants fonctionnels.
        
        Plongeons dans le Monde Magique des Hooks
        useState : La Potion de l'État
        Le Hook useState est comme une potion magique qui confère à vos composants fonctionnels la capacité d'avoir leur propre état local. C'est aussi simple que de dire « Abracadabra ! »
        
        jsx
        Copy code
        const [count, setCount] = useState(0);
        useEffect : Le Sortilège des Effets Secondaires
        Le Hook useEffect vous permet de lancer des sorts (fonctions) après que le composant a été rendu. Utilisez-le pour des opérations telles que des appels API ou la manipulation du DOM.
        
        jsx
        Copy code
        useEffect(() => {
          // Votre sortilège ici
        }, [dependencies]);
        Et Maintenant, Quelques Blagues pour Alléger l'Ambiance
        Pourquoi les développeurs React sont-ils de si bons magiciens ? Parce qu'ils sont experts dans l'art des Hooks !
        
        Comment les Hooks aident-ils les développeurs React à pêcher ? En les aidant à attraper et à gérer les poissons d'état !
        
        Pourquoi les Hooks ont-ils le sens de l'humour ? Parce qu'ils savent que parfois, vous avez juste besoin d'une bonne blague pour gérer l'état de votre journée !
        
        Conclusion : Devenez le Magicien React Ultime
        En explorant les méandres de React Hooks, vous débloquerez une nouvelle dimension de la programmation React. Alors, enfilez votre chapeau de magicien, agitez votre baguette (ou votre clavier), et plongez dans le monde enchanteur des Hooks !
        
        `
    },
    { id: 2, title: 'Guide complet sur Node.js', date: '2023-01-10', image: image.ReactHooksImage },
    { id: 3, title: 'Les bases du développement web', date: '2023-01-05', image: image.ReactHooksImage },
];

export default recentArticlesData