import fastify from "fastify";
import fastifyCors from "@fastify/cors";

const server = fastify({
    logger: true,
});

server.register(fastifyCors);
const users = [
    {
        name: 'Olena',
        phoneNumber: '12343',
        id: 1,
    }
];

server.get('/users', () => {
    return users;
});

server.post('/users', (request) => {
    const { name, phoneNumber } = request.body;

    users.push({
        name,
        phoneNumber,
        id: Math.random(),
    });

    return users;
})


server.listen({
    port: 8081,
    host: '0.0.0.0'
});