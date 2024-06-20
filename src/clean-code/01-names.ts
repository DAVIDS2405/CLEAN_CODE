(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const files_to_evaluate = [
        { id: 1, flag: false },
        { id: 2, flag: false },
        { id: 3, flag: true },
        { id: 4, flag: false },
        { id: 5, flag: false },
        { id: 7, flag: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const files_to_delete = files_to_evaluate.map( file => file.flag );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const get_current_day = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsed_time_days: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const files_in_directory = 33;
    
    // primer nombre - first name
    const first_name = 'Fernando';
    
    // primer apellido - last name
    const last_name = 'Herrera';

    // días desde la última modificación - days since modification
    const days_since_modification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const max_class = 6;


})();

