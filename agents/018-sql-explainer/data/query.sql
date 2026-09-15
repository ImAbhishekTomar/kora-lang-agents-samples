SELECT *
FROM orders o
JOIN customers c ON c.id = o.customer_id
WHERE LOWER(c.email) = 'buyer@example.test'
ORDER BY o.created_at DESC;

