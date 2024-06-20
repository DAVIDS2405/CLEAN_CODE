(() => {

    const temperature_celsius = [33.6, 12.34];

    const server_ip = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const users_emails = users.map( user => user.email );

    const can_jump = false;
    const can_run = true;
    const has_items = false;
    const is_loading = true;


    const start_time = new Date().getTime();

    const end_time = new Date().getTime() - start_time;


    function get_book() {
        throw new Error('Function not implemented.');
    }

    function get_books_by_Url( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function get_square_area( side: number ) {
        throw new Error('Function not implemented.');
    }

    function print_job() {
        throw new Error('Function not implemented.');
    }
    

})();




