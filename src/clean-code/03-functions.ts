(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getActorsByMovieId( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    interface Movie{
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    function createMovie({title,description,rating,cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName( fullName: string ): boolean {
        console.log('Verificar nombre');

        return true;
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        

        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    


})();



